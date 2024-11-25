import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  Typography,
  Button,
} from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import { Topic } from '../types';

interface TopicListProps {
  topics: Topic[];
}

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1">
          Στατιστική
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<FunctionsIcon />}
          onClick={() => navigate('/cheatsheet')}
          sx={{ minWidth: '160px', height: '40px' }}
        >
          Φόρμουλες
        </Button>
      </Box>

      <Grid container spacing={2}>
        {topics.map((topic, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea 
                onClick={() => navigate(`/topic/${index}`)}
                sx={{ 
                  p: 1.5,
                  minHeight: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography 
                  variant="h6" 
                  component="div" 
                  align="center"
                  sx={{ fontSize: '1rem' }}
                >
                  {topic.title}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopicList;
