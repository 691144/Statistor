import { Topic } from '../../types';

export const frequencyDistributions: Topic = {
  id: '7',
  title: 'Κατανομές Συχνοτήτων',
  description: 'Οργάνωση και παρουσίαση δεδομένων με πίνακες συχνοτήτων',
  theory: [
    'Οι κατανομές συχνοτήτων είναι ένας τρόπος οργάνωσης δεδομένων που δείχνει πόσο συχνά εμφανίζεται κάθε τιμή. Βασικές έννοιες:',
    {
      content: '1. Απόλυτη Συχνότητα (f)',
      isMath: false
    },
    'Ο αριθμός των παρατηρήσεων σε κάθε κατηγορία ή κλάση',
    {
      content: '2. Σχετική Συχνότητα (rf)',
      isMath: false
    },
    {
      content: 'rf = \\frac{f}{n}',
      isMath: true
    },
    'Όπου n είναι το συνολικό μέγεθος του δείγματος',
    {
      content: '3. Αθροιστική Συχνότητα (cf)',
      isMath: false
    },
    'Το άθροισμα των συχνοτήτων μέχρι και την τρέχουσα κλάση',
    {
      content: '4. Σχετική Αθροιστική Συχνότητα (rf%)',
      isMath: false
    },
    {
      content: 'rf\\% = \\frac{cf}{n} \\times 100\\%',
      isMath: true
    }
  ],
  examples: [
    {
      question: 'Δημιουργήστε έναν πίνακα συχνοτήτων για τις ακόλουθες ηλικίες: 20, 22, 21, 23, 20, 22, 24, 21, 20, 23',
      solution: {
        content: `Ηλικία | f | rf | cf | rf%
20      | 3 | 0.3 | 3  | 30%
21      | 2 | 0.2 | 5  | 50%
22      | 2 | 0.2 | 7  | 70%
23      | 2 | 0.2 | 9  | 90%
24      | 1 | 0.1 | 10 | 100%`,
        isMath: false
      }
    }
  ],
  exercises: [
    {
      id: '7.1',
      type: 'multiple_choice',
      question: 'Αν σε ένα δείγμα 50 φοιτητών, 15 φοιτητές έχουν βαθμό "Άριστα", ποια είναι η σχετική συχνότητα των αριστούχων;',
      options: [
        '0.3 ή 30%',
        '0.25 ή 25%',
        '0.35 ή 35%',
        '0.4 ή 40%'
      ],
      correctAnswerIndex: 0,
      explanation: 'Η σχετική συχνότητα υπολογίζεται ως f/n = 15/50 = 0.3 ή 30%'
    },
    {
      id: '7.2',
      type: 'multiple_choice',
      question: 'Σε έναν πίνακα συχνοτήτων, το άθροισμα των σχετικών συχνοτήτων πρέπει πάντα να είναι:',
      options: [
        '1 ή 100%',
        '0',
        'Εξαρτάται από το μέγεθος του δείγματος',
        'Εξαρτάται από τον αριθμό των κλάσεων'
      ],
      correctAnswerIndex: 0,
      explanation: 'Το άθροισμα των σχετικών συχνοτήτων πρέπει πάντα να είναι 1 (ή 100%), καθώς αντιπροσωπεύει το σύνολο των παρατηρήσεων.'
    }
  ],
  qa: [
    {
      id: '7.qa.1',
      question: 'Ποια είναι η διαφορά μεταξύ απόλυτης και σχετικής συχνότητας;',
      answer: 'Η απόλυτη συχνότητα (f) είναι ο πραγματικός αριθμός των παρατηρήσεων σε κάθε κατηγορία, ενώ η σχετική συχνότητα (rf) είναι το ποσοστό των παρατηρήσεων σε κάθε κατηγορία σε σχέση με το συνολικό μέγεθος του δείγματος.'
    },
    {
      id: '7.qa.2',
      question: 'Πότε χρησιμοποιούμε την αθροιστική συχνότητα;',
      answer: 'Η αθροιστική συχνότητα χρησιμοποιείται όταν θέλουμε να γνωρίζουμε πόσες παρατηρήσεις βρίσκονται κάτω από ή μέχρι μια συγκεκριμένη τιμή. Είναι ιδιαίτερα χρήσιμη για τον υπολογισμό των ποσοστημορίων και τη δημιουργία αθροιστικών καμπυλών συχνότητας.'
    }
  ]
};
