import { Topic } from '../../types';

export const nonparametricStatistics: Topic = {
  id: '12',
  title: 'Μη Παραμετρική Στατιστική',
  description: 'Στατιστικές μέθοδοι που δεν απαιτούν συγκεκριμένες υποθέσεις για την κατανομή των δεδομένων',
  theory: [
    'Η μη παραμετρική στατιστική χρησιμοποιείται όταν δεν πληρούνται οι προϋποθέσεις των παραμετρικών μεθόδων:',
    {
      content: '1. Έλεγχος Wilcoxon για ένα δείγμα',
      isMath: false
    },
    'Εναλλακτική του t-test ενός δείγματος',
    {
      content: 'W = \\sum_{i=1}^n [rank(|x_i - μ_0|) \\cdot sign(x_i - μ_0)]',
      isMath: true
    },
    {
      content: '2. Έλεγχος Mann-Whitney U',
      isMath: false
    },
    'Εναλλακτική του t-test δύο ανεξάρτητων δειγμάτων',
    {
      content: 'U = n_1n_2 + \\frac{n_1(n_1 + 1)}{2} - R_1',
      isMath: true
    },
    {
      content: '3. Έλεγχος Kruskal-Wallis',
      isMath: false
    },
    'Εναλλακτική της ANOVA μίας κατεύθυνσης',
    {
      content: 'H = \\frac{12}{N(N+1)}\\sum_{i=1}^k \\frac{R_i^2}{n_i} - 3(N+1)',
      isMath: true
    },
    {
      content: '4. Συντελεστής Συσχέτισης Spearman',
      isMath: false
    },
    {
      content: 'r_s = 1 - \\frac{6\\sum d_i^2}{n(n^2-1)}',
      isMath: true
    }
  ],
  examples: [
    {
      question: 'Σε μια μελέτη ικανοποίησης πελατών, συγκρίνουμε δύο καταστήματα με βαθμολογίες: A=[85,90,78,92,88], B=[75,82,79,85,81]. Εφαρμόστε τον έλεγχο Mann-Whitney U.',
      solution: {
        content: 'Κατάταξη: [75(B),78(A),79(B),81(B),82(B),85(B),85(A),88(A),90(A),92(A)]\\nU = 25 - 4 = 21',
        isMath: true
      }
    }
  ],
  exercises: [
    {
      id: '12.1',
      type: 'multiple_choice',
      question: 'Ποιος έλεγχος είναι καταλληλότερος για τη σύγκριση τριών ανεξάρτητων ομάδων όταν τα δεδομένα δεν ακολουθούν κανονική κατανομή;',
      options: [
        'Έλεγχος Wilcoxon',
        'Έλεγχος Mann-Whitney U',
        'Έλεγχος Kruskal-Wallis',
        'Συντελεστής Spearman'
      ],
      correctAnswerIndex: 2,
      explanation: 'Ο έλεγχος Kruskal-Wallis είναι η μη παραμετρική εναλλακτική της ANOVA και χρησιμοποιείται για τη σύγκριση τριών ή περισσότερων ανεξάρτητων ομάδων.'
    },
    {
      id: '12.2',
      type: 'multiple_choice',
      question: 'Πότε προτιμάται ο συντελεστής συσχέτισης Spearman έναντι του Pearson;',
      options: [
        'Όταν τα δεδομένα είναι κανονικά κατανεμημένα',
        'Όταν υπάρχει γραμμική σχέση',
        'Όταν τα δεδομένα είναι διατεταγμένα αλλά όχι κανονικά',
        'Όταν το μέγεθος του δείγματος είναι μεγάλο'
      ],
      correctAnswerIndex: 2,
      explanation: 'Ο συντελεστής Spearman χρησιμοποιείται όταν τα δεδομένα είναι διατεταγμένα ή δεν ακολουθούν κανονική κατανομή, καθώς βασίζεται στις τάξεις (ranks) και όχι στις πραγματικές τιμές.'
    }
  ],
  qa: [
    {
      id: '12.qa.1',
      question: 'Ποια είναι τα πλεονεκτήματα και μειονεκτήματα των μη παραμετρικών μεθόδων;',
      answer: 'Πλεονεκτήματα: Δεν απαιτούν υποθέσεις για την κατανομή των δεδομένων, είναι ανθεκτικές σε ακραίες τιμές, και μπορούν να χρησιμοποιηθούν με διατεταγμένα δεδομένα. Μειονεκτήματα: Έχουν μικρότερη στατιστική ισχύ από τις παραμετρικές μεθόδους όταν τα δεδομένα είναι κανονικά κατανεμημένα, και μπορεί να χάνουν πληροφορία λόγω της χρήσης τάξεων αντί πραγματικών τιμών.'
    },
    {
      id: '12.qa.2',
      question: 'Τι είναι η διάταξη (ranking) και γιατί είναι σημαντική στη μη παραμετρική στατιστική;',
      answer: 'Η διάταξη είναι η διαδικασία αντικατάστασης των πραγματικών τιμών με τη σειρά κατάταξής τους (π.χ., η μικρότερη τιμή παίρνει rank 1). Είναι θεμελιώδης στη μη παραμετρική στατιστική γιατί επιτρέπει την ανάλυση χωρίς υποθέσεις για την κατανομή των δεδομένων και είναι ανθεκτική σε ακραίες τιμές.'
    }
  ]
};