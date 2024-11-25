import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  Typography,
  Box,
  Grid,
  Button,
} from '@mui/material';
import { BlockMath } from 'react-katex';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'katex/dist/katex.min.css';

const CheatSheet: React.FC = () => {
  const navigate = useNavigate();
  const formulas = {
    'Περιγραφικά Μέτρα': [
      { name: 'Μέσος', formula: '\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}' },
      { name: 'Διάμεσος', formula: 'Md = x_{(\\frac{n+1}{2})} \\text{ ή } \\frac{x_{(\\frac{n}{2})} + x_{(\\frac{n}{2}+1)}}{2}' },
      { name: 'Επικρατούσα Τιμή', formula: 'Mo = \\text{συχνότερη τιμή}' },
    ],
    'Μέτρα Διασποράς': [
      { name: 'Διακύμανση', formula: 's^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n-1}' },
      { name: 'Τυπική Απόκλιση', formula: 's = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}' },
      { name: 'CV', formula: 'CV = \\frac{s}{\\bar{x}} \\cdot 100\\%' },
    ],
    'Κατανομές Συχνοτήτων': [
      { name: 'Σχετική Συχνότητα', formula: 'f_i = \\frac{n_i}{n}' },
      { name: 'Αθροιστική Συχνότητα', formula: 'N_i = \\sum_{j=1}^i n_j' },
      { name: 'Πλάτος Κλάσης', formula: 'h = \\frac{x_{max} - x_{min}}{k}' },
    ],
    'Γραφικές Παραστάσεις': [
      { name: 'Box Plot', formula: 'Q_1, Q_2, Q_3, IQR = Q_3 - Q_1' },
      { name: 'Ασυμμετρία', formula: '\\frac{\\bar{x} - Mo}{s}' },
      { name: 'Κύρτωση', formula: '\\frac{\\sum(x_i - \\bar{x})^4}{ns^4}' },
    ],
    'Βασική Πιθανότητα': [
      { name: 'Προσθετικός', formula: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)' },
      { name: 'Πολλαπλασιαστικός', formula: 'P(A \\cap B) = P(A)P(B|A)' },
      { name: 'Bayes', formula: 'P(A|B) = \\frac{P(B|A)P(A)}{P(B)}' },
    ],
    'Διακριτές Κατανομές': [
      { name: 'Διωνυμική', formula: 'P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}' },
      { name: 'Poisson', formula: 'P(X=k) = \\frac{e^{-λ}λ^k}{k!}' },
      { name: 'Γεωμετρική', formula: 'P(X=k) = p(1-p)^{k-1}' },
    ],
    'Συνεχείς Κατανομές': [
      { name: 'Κανονική', formula: 'Z = \\frac{X-μ}{σ}' },
      { name: 't-Student', formula: 't = \\frac{\\bar{x}-μ_0}{s/\\sqrt{n}}' },
      { name: 'χ²', formula: 'χ^2 = \\sum\\frac{(O_i-E_i)^2}{E_i}' },
    ],
    'Δειγματοληψία': [
      { name: 'Τυπικό Σφάλμα', formula: 'SE(\\bar{x}) = \\frac{σ}{\\sqrt{n}}' },
      { name: 'CLT', formula: '\\bar{X} \\sim N(μ, \\frac{σ^2}{n})' },
      { name: 'Μέγεθος Δείγματος', formula: 'n = (\\frac{zσ}{E})^2' },
    ],
    'Συσχέτιση': [
      { name: 'Pearson r', formula: 'r = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2\\sum(y_i-\\bar{y})^2}}' },
      { name: 'Spearman ρ', formula: 'ρ = 1 - \\frac{6\\sum d_i^2}{n(n^2-1)}' },
      { name: 'R²', formula: 'R^2 = r^2 = \\frac{SSR}{SST}' },
    ],
    'Παλινδρόμηση': [
      { name: 'Εξίσωση', formula: '\\hat{y} = b_0 + b_1x' },
      { name: 'Κλίση', formula: 'b_1 = r\\frac{s_y}{s_x}' },
      { name: 'MSE', formula: 'MSE = \\frac{\\sum(y_i-\\hat{y}_i)^2}{n-2}' },
    ],
    'Διαστήματα Εμπιστοσύνης': [
      { name: 'Μέσος (γνωστή σ)', formula: '\\bar{x} \\pm z_{α/2}\\frac{σ}{\\sqrt{n}}' },
      { name: 'Μέσος (άγνωστη σ)', formula: '\\bar{x} \\pm t_{α/2}\\frac{s}{\\sqrt{n}}' },
      { name: 'Ποσοστό', formula: 'p \\pm z_{α/2}\\sqrt{\\frac{p(1-p)}{n}}' },
    ],
    'Έλεγχοι Υποθέσεων': [
      { name: 'Z-test', formula: 'z = \\frac{\\bar{x} - μ_0}{σ/\\sqrt{n}}' },
      { name: 't-test', formula: 't = \\frac{\\bar{x} - μ_0}{s/\\sqrt{n}}' },
      { name: 'p-value', formula: 'P(|Z| > |z_{obs}|)' },
    ],
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', p: 2 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ mb: 2 }}
      >
        Πίσω
      </Button>
      
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ mb: 3 }}>
          Βασικές Φόρμουλες Στατιστικής
        </Typography>
        
        <Grid container spacing={2}>
          {Object.entries(formulas).map(([category, items]) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom sx={{ 
                  fontWeight: 'bold', 
                  fontSize: '0.9rem',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  p: 0.5,
                  borderRadius: 1
                }}>
                  {category}
                </Typography>
                {items.map((item, index) => (
                  <Box key={index} sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ 
                      fontSize: '0.8rem',
                      fontWeight: 'medium',
                      color: 'text.secondary'
                    }}>
                      {item.name}:
                    </Typography>
                    <BlockMath math={item.formula} />
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default CheatSheet;
