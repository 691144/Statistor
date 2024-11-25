import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import { Topic, Exercise, MultipleChoiceExercise } from '../types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { useChatContext } from '../contexts/ChatContext';
import ChatAgent from './ChatAgent/ChatAgent';

interface TopicDetailProps {
  topic: Topic;
}

const TopicDetail: React.FC<TopicDetailProps> = ({ topic }) => {
  const navigate = useNavigate();
  const { setCurrentTopic } = useChatContext();
  const [tabValue, setTabValue] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    setCurrentTopic(topic.title);
    return () => setCurrentTopic('');
  }, [topic.title, setCurrentTopic]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getCurrentExercise = (): Exercise => {
    return topic.exercises[currentExercise];
  };

  const isMultipleChoice = (exercise: Exercise): exercise is MultipleChoiceExercise => {
    return exercise.type === 'multiple_choice';
  };

  const handleAnswerSubmit = () => {
    const currentExerciseObj = getCurrentExercise();
    let isCorrect = false;

    if (isMultipleChoice(currentExerciseObj)) {
      isCorrect = userAnswer === currentExerciseObj.options[currentExerciseObj.correctAnswerIndex];
    } else {
      isCorrect = userAnswer.trim() === currentExerciseObj.correctAnswer;
    }

    if (isCorrect) {
      setConsecutiveCorrect(prev => prev + 1);
    } else {
      setConsecutiveCorrect(0);
    }
    setShowSolution(true);
  };

  const handleNextExercise = () => {
    if (consecutiveCorrect >= 2) {
      setTabValue(0);
    } else {
      setCurrentExercise(prev => (prev + 1) % topic.exercises.length);
    }
    setShowSolution(false);
    setUserAnswer('');
  };

  const renderExerciseInput = () => {
    const currentExerciseObj = getCurrentExercise();

    if (isMultipleChoice(currentExerciseObj)) {
      return (
        <List>
          {currentExerciseObj.options.map((option: string, index: number) => (
            <ListItem
              key={index}
              button
              onClick={() => setUserAnswer(option)}
              sx={{
                bgcolor: userAnswer === option ? 'action.selected' : 'transparent',
                borderRadius: 1,
                mb: 1,
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemText primary={option} />
            </ListItem>
          ))}
        </List>
      );
    }

    return (
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
    );
  };

  const isAnswerCorrect = () => {
    const currentExerciseObj = getCurrentExercise();
    if (isMultipleChoice(currentExerciseObj)) {
      return userAnswer === currentExerciseObj.options[currentExerciseObj.correctAnswerIndex];
    }
    return userAnswer.trim() === currentExerciseObj.correctAnswer;
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      gap: 2,
      p: 2,
      height: 'calc(100vh - 64px)', 
      overflow: 'hidden'
    }}>
      {/* Main Content Card - 60% */}
      <Paper 
        elevation={3} 
        sx={{ 
          flex: { xs: '0 0 calc(50vh - 64px)', md: '0 0 60%' },
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          height: { xs: 'calc(50vh - 32px)', md: '100%' },
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden'
        }}>
          <Box sx={{ flexShrink: 0 }}> {/* Header section - doesn't scroll */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate('/')}
                variant="outlined"
                sx={{ mr: 2 }}
              >
                Επιστροφή στο Μενού
              </Button>
              <Typography variant="h5" component="h1">
                {topic.title}
              </Typography>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Θεωρία" />
                <Tab label="Παραδείγματα" />
                <Tab label="Ερωτήσεις & Απαντήσεις" />
                <Tab label="Ασκήσεις" />
              </Tabs>
            </Box>
          </Box>

          <Box sx={{ 
            flex: 1,
            overflowY: 'auto',
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
          }}>
            {tabValue === 0 && (
              <Box sx={{ p: 2, '& *': { userSelect: 'text' } }}>
                {topic.theory.map((item, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="body1">
                      {typeof item === 'string' ? (
                        item
                      ) : item.isMath ? (
                        <BlockMath math={item.content} />
                      ) : (
                        item.content
                      )}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            {tabValue === 1 && (
              <Box 
                sx={{ 
                  p: 2, 
                  '& *': { userSelect: 'text' },
                  '& .katex-html *': { userSelect: 'text' }
                }}
              >
                {topic.examples.map((example, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 'bold', 
                        mb: 1,
                        userSelect: 'text'
                      }}
                    >
                      {example.question}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ userSelect: 'text' }}
                    >
                      {example.solution.isMath ? (
                        <div style={{ userSelect: 'text' }}>
                          <BlockMath math={example.solution.content} />
                        </div>
                      ) : (
                        example.solution.content.split('\n').map((line, i) => (
                          <div key={i} style={{ userSelect: 'text' }}>{line}</div>
                        ))
                      )}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            {tabValue === 2 && (
              <Box sx={{ p: 2, '& *': { userSelect: 'text' } }}>
                {topic.qa.map((qa, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Ερώτηση {index + 1}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {qa.question}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Απάντηση
                    </Typography>
                    <Typography variant="body1">
                      {qa.answer}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            {tabValue === 3 && (
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Άσκηση {currentExercise + 1}
                </Typography>
                <Typography variant="body1" paragraph>
                  {getCurrentExercise().question}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  {renderExerciseInput()}
                </Box>
                
                <Button 
                  variant="contained" 
                  onClick={handleAnswerSubmit}
                  disabled={!userAnswer.trim()}
                >
                  Έλεγχος
                </Button>

                {showSolution && (
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: isAnswerCorrect() ? 'green' : 'red',
                        mb: 1
                      }}
                    >
                      {isAnswerCorrect() ? 'Σωστό!' : 'Λάθος. Προσπάθησε ξανά.'}
                    </Typography>
                    {!isAnswerCorrect() && (
                      <Typography variant="body1" sx={{ color: 'text.primary', mt: 1 }}>
                        {getCurrentExercise().explanation}
                      </Typography>
                    )}
                    <Box sx={{ mt: 2 }}>
                      <Button variant="outlined" onClick={handleNextExercise}>
                        Επόμενη Άσκηση
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Paper>

      {/* Chat Card - 40% */}
      <Paper 
        elevation={3} 
        sx={{ 
          flex: { xs: '0 0 calc(50vh - 64px)', md: '0 0 40%' },
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          height: { xs: 'calc(50vh - 32px)', md: '100%' },
        }}
      >
        <ChatAgent currentTopic={topic.title} />
      </Paper>
    </Box>
  );
};

export default TopicDetail;
