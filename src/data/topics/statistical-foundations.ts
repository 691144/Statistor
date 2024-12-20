import { Topic } from '../../types';

export const statisticalFoundations: Topic = {
  id: '0',
  title: 'Θεμέλια Στατιστικής',
  description: 'Μια ολοκληρωμένη εισαγωγή στις βασικές έννοιες και μεθόδους της στατιστικής',
  theory: [
    'Η στατιστική είναι η επιστήμη της συλλογής, ανάλυσης, ερμηνείας και παρουσίασης δεδομένων. Αυτή η ενότητα παρέχει μια ολοκληρωμένη επισκόπηση των θεμελιωδών εννοιών.',
    
    '1. ΒΑΣΙΚΕΣ ΕΝΝΟΙΕΣ',
    '• Πληθυσμός: Το σύνολο όλων των στοιχείων που μας ενδιαφέρουν',
    '• Δείγμα: Υποσύνολο του πληθυσμού',
    '• Μεταβλητή: Χαρακτηριστικό που μετράμε ή παρατηρούμε',
    '• Παράμετρος: Χαρακτηριστικό του πληθυσμού',
    '• Στατιστικό: Χαρακτηριστικό του δείγματος',
    
    '2. ΤΥΠΟΙ ΔΕΔΟΜΕΝΩΝ',
    '• Ποιοτικά (Κατηγορικά)',
    '  - Ονομαστικά: Κατηγορίες χωρίς φυσική σειρά',
    '  - Διατακτικά: Κατηγορίες με φυσική σειρά',
    '• Ποσοτικά (Αριθμητικά)',
    '  - Διακριτά: Μετρήσεις σε διακριτές τιμές',
    '  - Συνεχή: Μετρήσεις σε συνεχές διάστημα',
    
    '3. ΠΕΡΙΓΡΑΦΙΚΗ ΣΤΑΤΙΣΤΙΚΗ',
    '• Μέτρα Κεντρικής Τάσης',
    {
      content: '\\text{Μέσος: }\\bar{x} = \\frac{\\sum x_i}{n}\\\\\\text{Διάμεσος: Κεντρική τιμή}\\\\\\text{Επικρατούσα τιμή: Συχνότερη τιμή}',
      isMath: true
    },
    '• Μέτρα Διασποράς',
    {
      content: '\\text{Διακύμανση: }s^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n-1}\\\\\\text{Τυπική απόκλιση: }s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}',
      isMath: true
    },
    
    '4. ΠΙΘΑΝΟΤΗΤΕΣ',
    '• Βασικοί Κανόνες',
    {
      content: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\\\P(A|B) = \\frac{P(A \\cap B)}{P(B)}',
      isMath: true
    },
    '• Κατανομές Πιθανότητας',
    '  - Διωνυμική: Επαναλαμβανόμενες δοκιμές Bernoulli',
    '  - Κανονική: Συνεχής κατανομή με σχήμα καμπάνας',
    
    '5. ΔΕΙΓΜΑΤΟΛΗΨΙΑ',
    '• Μέθοδοι Δειγματοληψίας',
    '  - Τυχαία: Κάθε στοιχείο έχει ίση πιθανότητα επιλογής',
    '  - Στρωματοποιημένη: Διαίρεση πληθυσμού σε στρώματα',
    '  - Συστηματική: Επιλογή με σταθερό διάστημα',
    '• Κεντρικό Οριακό Θεώρημα',
    {
      content: '\\bar{X} \\sim N(\\mu, \\frac{\\sigma^2}{n})',
      isMath: true
    },
    
    '6. ΔΙΑΣΤΗΜΑΤΑ ΕΜΠΙΣΤΟΣΥΝΗΣ',
    '• Για τον μέσο (γνωστή σ)',
    {
      content: '\\bar{x} \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}',
      isMath: true
    },
    '• Για τον μέσο (άγνωστη σ)',
    {
      content: '\\bar{x} \\pm t_{\\alpha/2}\\frac{s}{\\sqrt{n}}',
      isMath: true
    },
    
    '7. ΕΛΕΓΧΟΣ ΥΠΟΘΕΣΕΩΝ',
    '• Βήματα',
    '  1. Διατύπωση υποθέσεων (H₀, H₁)',
    '  2. Επιλογή επιπέδου σημαντικότητας (α)',
    '  3. Υπολογισμός στατιστικού ελέγχου',
    '  4. Σύγκριση με κρίσιμη τιμή',
    '  5. Λήψη απόφασης',
    '• Τύποι Σφαλμάτων',
    '  - Τύπου Ι: Απόρριψη αληθούς H₀',
    '  - Τύπου ΙΙ: Μη απόρριψη ψευδούς H₀',
    
    '8. ΣΥΣΧΕΤΙΣΗ & ΠΑΛΙΝΔΡΟΜΗΣΗ',
    '• Συντελεστής Συσχέτισης Pearson',
    {
      content: 'r = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2\\sum(y_i-\\bar{y})^2}}',
      isMath: true
    },
    '• Απλή Γραμμική Παλινδρόμηση',
    {
      content: 'y = \\beta_0 + \\beta_1x + \\epsilon',
      isMath: true
    }
  ],
  examples: [
    {
      question: '1. ΒΑΣΙΚΕΣ ΕΝΝΟΙΕΣ\n\nΣε μια έρευνα για την επίδοση μαθητών:\n- Πληθυσμός: Όλοι οι μαθητές Λυκείου στην Ελλάδα\n- Δείγμα: 1000 μαθητές από 50 τυχαία επιλεγμένα Λύκεια\n- Μεταβλητή: Βαθμός στα Μαθηματικά\n- Παράμετρος: Μέσος όρος βαθμών όλων των μαθητών (μ)\n- Στατιστικό: Μέσος όρος βαθμών του δείγματος (x̄)',
      solution: {
        content: '\\text{Παράμετρος πληθυσμού: }\\mu\\text{ (άγνωστη)}\\\\\\text{Στατιστικό δείγματος: }\\bar{x}\\text{ (υπολογίσιμη)}',
        isMath: true
      }
    },
    {
      question: '2. ΤΥΠΟΙ ΔΕΔΟΜΕΝΩΝ\n\nΑναγνωρίστε τους τύπους των παρακάτω δεδομένων:\n- Χρώμα ματιών (μπλε, καφέ, πράσινο)\n- Επίπεδο εκπαίδευσης (πρωτοβάθμια, δευτεροβάθμια, τριτοβάθμια)\n- Αριθμός παιδιών σε οικογένεια\n- Ύψος σε εκατοστά',
      solution: {
        content: '\\text{Ονομαστικά: Χρώμα ματιών}\\\\\\text{Διατακτικά: Επίπεδο εκπαίδευσης}\\\\\\text{Διακριτά: Αριθμός παιδιών}\\\\\\text{Συνεχή: Ύψος}',
        isMath: true
      }
    },
    {
      question: '3. ΠΕΡΙΓΡΑΦΙΚΗ ΣΤΑΤΙΣΤΙΚΗ\n\nΥπολογίστε τα μέτρα κεντρικής τάσης και διασποράς για το δείγμα: 2, 4, 4, 4, 5, 5, 7',
      solution: {
        content: '\\text{Μέσος: }\\bar{x} = \\frac{2 + 4 + 4 + 4 + 5 + 5 + 7}{7} = 4.43\\\\\\text{Διάμεσος: }4\\\\\\text{Επικρατούσα τιμή: }4\\\\\\text{Διακύμανση: }s^2 = 2.29\\\\\\text{Τυπική απόκλιση: }s = 1.51',
        isMath: true
      }
    },
    {
      question: '4. ΠΙΘΑΝΟΤΗΤΕΣ\n\nΣε ένα τμήμα 30 μαθητών, 15 παίζουν ποδόσφαιρο (Α) και 12 μπάσκετ (Β). 8 μαθητές παίζουν και τα δύο. Βρείτε τις πιθανότητες P(A), P(B), P(A∩B), και P(A∪B).',
      solution: {
        content: 'P(A) = \\frac{15}{30} = 0.5 \\quad P(B) = \\frac{12}{30} = 0.4 \\quad P(A \\cap B) = \\frac{8}{30} = 0.267 \\quad P(A \\cup B) = 0.5 + 0.4 - 0.267 = 0.633',
        isMath: true
      }
    },
    {
      question: '5. ΔΕΙΓΜΑΤΟΛΗΨΙΑ\n\nΣε έρευνα 1000 φοιτητών, περιγράψτε πώς θα εφαρμόζατε:\n- Απλή τυχαία δειγματοληψία\n- Στρωματοποιημένη δειγματοληψία\n- Συστηματική δειγματοληψία\n- Δειγματοληψία κατά συστάδες',
      solution: {
        content: '\\begin{array}{l} \\text{1. Απλή τυχαία: Τυχαία επιλογή 100 φοιτητών} \\\\ \\text{2. Στρωματοποιημένη: 20 από κάθε έτος} \\\\ \\text{3. Συστηματική: Κάθε 10ος φοιτητής} \\\\ \\text{4. Συστάδες: Όλοι οι φοιτητές από 5 τυχαία τμήματα} \\end{array}',
        isMath: true
      }
    },
    {
      question: '6. ΔΙΑΣΤΗΜΑΤΑ ΕΜΠΙΣΤΟΣΥΝΗΣ\n\nΚατασκευάστε διάστημα εμπιστοσύνης 95% για τον μέσο όρο ύψους φοιτητών, όταν n=25, x̄=175cm, s=8cm',
      solution: {
        content: '\\begin{array}{l} 175 \\pm 2.064 \\cdot \\frac{8}{\\sqrt{25}} = 175 \\pm 3.3 \\\\ \\text{Διάστημα: } (171.7\\text{ cm}, 178.3\\text{ cm}) \\end{array}',
        isMath: true
      }
    },
    {
      question: '7. ΕΛΕΓΧΟΣ ΥΠΟΘΕΣΕΩΝ\n\nΈλεγχος ισχυρισμού ότι ο μέσος χρόνος μελέτης είναι 3 ώρες (μ₀=3), με x̄=3.5, s=1.2, n=36. Χρησιμοποιήστε επίπεδο σημαντικότητας α=0.05.',
      solution: {
        content: '\\begin{array}{l} H_0: \\mu = 3 \\\\ H_1: \\mu \\neq 3 \\\\ t = \\frac{3.5-3}{1.2/\\sqrt{36}} = 2.5 \\\\ \\text{Κρίσιμη τιμή } t_{0.025,35} = 2.03 \\\\ \\text{Απόφαση: Απόρριψη } H_0 \\end{array}',
        isMath: true
      }
    },
    {
      question: '8. ΣΥΣΧΕΤΙΣΗ & ΠΑΛΙΝΔΡΟΜΗΣΗ\n\nΥπολογίστε τη συσχέτιση και την εξίσωση παλινδρόμησης για τα ζεύγη: (2,4), (3,5), (5,7), (6,8), (8,10)',
      solution: {
        content: '\\begin{array}{l} r = 1.0 \\quad \\text{(τέλεια θετική συσχέτιση)} \\\\ \\hat{y} = 2 + x \\quad \\text{(εξίσωση παλινδρόμησης)} \\end{array}',
        isMath: true
      }
    }
  ],
  exercises: [
    {
      id: '0.1',
      type: 'multiple_choice',
      question: 'Ποιο από τα παρακάτω είναι ποσοτική μεταβλητή συνεχούς κλίμακας;',
      options: [
        'Αριθμός παιδιών σε οικογένεια',
        'Θερμοκρασία σε βαθμούς Κελσίου',
        'Ταχυδρομικός κώδικας',
        'Βαθμός ικανοποίησης (1-5)'
      ],
      correctAnswerIndex: 1,
      explanation: 'Η θερμοκρασία μπορεί να πάρει οποιαδήποτε τιμή σε ένα διάστημα και δεν περιορίζεται σε διακριτές τιμές.'
    },
    {
      id: '0.2',
      type: 'multiple_choice',
      question: 'Σε έλεγχο υποθέσεων, τι συμβαίνει όταν αυξάνουμε το επίπεδο σημαντικότητας α;',
      options: [
        'Μειώνεται η πιθανότητα σφάλματος τύπου Ι',
        'Αυξάνεται η πιθανότητα σφάλματος τύπου Ι',
        'Δεν επηρεάζεται η πιθανότητα σφάλματος',
        'Μηδενίζεται η πιθανότητα σφάλματος'
      ],
      correctAnswerIndex: 1,
      explanation: 'Αυξάνοντας το επίπεδο σημαντικότητας α, αυξάνεται η πιθανότητα σφάλματος τύπου Ι (λανθασμένη απόρριψη της H₀).'
    }
  ],
  qa: [
    {
      id: '0.1',
      question: 'Ποια η διαφορά μεταξύ παραμέτρου και στατιστικού;',
      answer: 'Η παράμετρος είναι ένα χαρακτηριστικό του πληθυσμού (π.χ., μ, σ), ενώ το στατιστικό είναι ένα χαρακτηριστικό του δείγματος (π.χ., x̄, s). Οι παράμετροι είναι συνήθως άγνωστοι και εκτιμώνται από τα στατιστικά του δείγματος.'
    },
    {
      id: '0.2',
      question: 'Τι είναι το Κεντρικό Οριακό Θεώρημα και γιατί είναι σημαντικό;',
      answer: 'Το Κεντρικό Οριακό Θεώρημα δηλώνει ότι η δειγματική κατανομή των μέσων προσεγγίζει την κανονική κατανομή καθώς το μέγεθος του δείγματος αυξάνεται, ανεξάρτητα από την κατανομή του πληθυσμού. Είναι θεμελιώδες για τη στατιστική συμπερασματολογία και τη δημιουργία διαστημάτων εμπιστοσύνης.'
    },
    {
      id: '0.3',
      question: 'Πότε χρησιμοποιούμε τον συντελεστή συσχέτισης Pearson και τι μας δείχνει;',
      answer: 'Ο συντελεστής συσχέτισης Pearson (r) χρησιμοποιείται για να μετρήσει τη γραμμική σχέση μεταξύ δύο ποσοτικών μεταβλητών. Παίρνει τιμές από -1 έως +1, όπου -1 δείχνει τέλεια αρνητική συσχέτιση, +1 τέλεια θετική συσχέτιση, και 0 καμία γραμμική συσχέτιση.'
    }
  ]
};
