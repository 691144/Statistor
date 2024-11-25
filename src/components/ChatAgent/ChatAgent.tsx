import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Typography,
  CircularProgress,
  useTheme
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import OpenAI from 'openai';
import SelectionMenu from '../SelectionMenu/SelectionMenu';

type MessageRole = 'user' | 'assistant' | 'system';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatAgentProps {
  currentTopic?: string;
}

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true
});

const systemPrompt = `You are a helpful and knowledgeable statistics tutor. Your role is to assist students in understanding statistical concepts, solve problems, and provide clear explanations. Keep your responses concise but informative. When explaining concepts, use simple language and provide examples when appropriate. If the current topic is provided, relate your responses to that topic.`;

const ChatAgent: React.FC<ChatAgentProps> = ({ currentTopic }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuestionType = (type: string, selectedText: string) => {
    let question = '';
    switch (type) {
      case 'explanation':
        question = `Μπορείς να μου εξηγήσεις με απλά λόγια την έννοια: "${selectedText}"`;
        break;
      case 'examples':
        question = `Μπορείς να μου δώσεις μερικά παραδείγματα για το: "${selectedText}"`;
        break;
      case 'steps':
        question = `Ποια είναι τα βήματα για να λύσω/κατανοήσω το: "${selectedText}"`;
        break;
      case 'practice':
        question = `Μπορείς να μου δώσεις μια άσκηση σχετική με: "${selectedText}"`;
        break;
      default:
        question = `Θα ήθελα περισσότερες πληροφορίες για: "${selectedText}"`;
    }
    setInput(question);
    sendMessage(question);
  };

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: message }]);
    setIsLoading(true);

    try {
      const chatMessages: { role: MessageRole; content: string }[] = [
        { role: 'system', content: systemPrompt }
      ];

      if (currentTopic) {
        chatMessages.push({
          role: 'system',
          content: `The current topic being studied is: ${currentTopic}`
        });
      }

      chatMessages.push(
        ...messages.map(msg => ({ role: msg.role as MessageRole, content: msg.content })),
        { role: 'user' as MessageRole, content: message }
      );

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: chatMessages
      });

      const assistantMessage = response.choices[0]?.message?.content || 'Sorry, I could not process your request.';
      setMessages((prev) => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <SelectionMenu onQuestionSelect={handleQuestionType} />
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden'
      }}>
        {/* Fixed Header */}
        <Box
          sx={{
            p: 2,
            bgcolor: theme.palette.primary.main,
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '4px 4px 0 0',
            flexShrink: 0,
            zIndex: 1
          }}
        >
          <Typography variant="h6">Statistics Tutor</Typography>
        </Box>

        {/* Chat Content */}
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100% - 64px)', // Subtract header height
            overflow: 'hidden'
          }}
        >
          {/* Scrollable Messages Area */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px',
                '&:hover': {
                  background: '#666',
                },
              },
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  bgcolor: message.role === 'user' ? 'primary.main' : 'grey.100',
                  color: message.role === 'user' ? 'white' : 'text.primary',
                  p: 2,
                  borderRadius: 2,
                }}
              >
                <Typography variant="body1">{message.content}</Typography>
              </Box>
            ))}
            {isLoading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <CircularProgress size={24} />
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Fixed Input Area */}
          <Box 
            sx={{ 
              p: 2, 
              borderTop: 1, 
              borderColor: 'divider', 
              bgcolor: 'background.paper',
              flexShrink: 0,
              mt: 'auto'
            }}
          >
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleButtonClick(e as any)}
                placeholder="Type your question..."
                sx={{ flex: 1 }}
              />
              <IconButton 
                color="primary" 
                onClick={handleButtonClick}
                disabled={!input.trim() || isLoading}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChatAgent;
