// Update projects here; cards, counts and links update automatically.
export const projects = [
  {
    id: 'mira-flowers',
    study: {
      "image": "mira-catalog",
      "alt": "Mira Flowers catalog showing the bouquet filters and product cards",
      "challenge": "A flower shop in Kutaisi needed one place for customers to browse arrangements and find pickup, delivery, and contact details.",
      "contribution": "I built the Georgian storefront, category filters, persistent cart, and delivery calculations in vanilla JavaScript. The cart prepares a summary customers can copy into a message.",
      "result": "The live site lets customers plan an order and contact the shop to confirm it.",
      "features": [
        "Catalog filters",
        "Persistent cart",
        "Delivery estimates"
      ]
    },
    title: 'Mira Flowers',
    category: 'Websites',
    label: 'Real storefront',
    summary: 'A Georgian-language storefront for a flower shop in Kutaisi, with a catalog, cart, and an order summary customers can copy.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://givi588.github.io/mira-flowers/',
    code: 'https://github.com/givi588/mira-flowers',

  },
  {
    id: 'pandora-the-forbidden-gift',
    study: {
      image: 'pandora-temple.png',
      alt: "In-game view of Pandora's box and the temple exit across the chasm",
      challenge: "Create a complete first-person 3D puzzle inspired by Greek mythology, with a beginning, an interactive mechanic, and an ending.",
      contribution: "I defined the concept, scope, and central puzzle rules, reviewed iterations, and manually play-tested the Windows release. Codex assisted with GDScript implementation, Blender Python models, synthesized audio, automated tests, and release preparation.",
      result: "Published a playable Windows x64 game with original procedural 3D assets, a documented Godot source project, and automated regression tests.",
      features: [
        "First-person temple puzzle",
        "Original 3D assets",
        "Windows v1.0.0 release"
      ]
    },
    title: 'Pandora: The Forbidden Gift',
    category: 'Games',
    label: 'Released 3D puzzle game',
    summary: "A first-person Godot puzzle set in a Greek-inspired temple. Open Pandora's box, stop the tremors, and find a safe path to the exit.",
    stack: ['Godot', 'GDScript', 'Blender', 'Python'],
    demo: null,
    download: 'https://github.com/givi588/pandora-the-forbidden-gift/releases/download/v1.0.0/Pandora-The-Forbidden-Gift-v1.0.0-Windows.zip',
    code: 'https://github.com/givi588/pandora-the-forbidden-gift',
  },
  {
    id: 'invoice-quote-studio',
    study: {
      "image": "invoice",
      "alt": "Invoice & Quote Studio editor beside its sample document preview",
      "challenge": "Preparing quotes and invoices in a browser requires consistent totals and a document that prints cleanly.",
      "contribution": "I built the React and TypeScript editor, with totals calculated in integer minor units, optional tax and discounts, and JSON backup for local drafts.",
      "result": "The demo lets you edit a sample document and use the browser’s print dialog to save it as PDF.",
      "features": [
        "Live document preview",
        "Tax and discounts",
        "Print to PDF"
      ]
    },
    title: 'Invoice & Quote Studio',
    category: 'Dashboards',
    label: 'Business document tool',
    summary: 'Prepare quotes and invoices with live totals, drafts saved in the browser, and a print-ready preview.',
    stack: ['React', 'TypeScript', 'Vite'],
    demo: 'https://givi588.github.io/invoice-quote-studio/',
    code: 'https://github.com/givi588/invoice-quote-studio',

  },
  {
    id: 'category-dashboard',
    study: {
      "image": "category",
      "alt": "Category Dashboard 2.1 showing inventory totals, category bars, and the category list",
      "challenge": "A browser-based inventory tool needs a way to recover after an accidental deletion or a failed save.",
      "contribution": "I built category search and sorting, CSV and JSON transfer, and recovery tools. Tests cover storage failures and restoring the previous save.",
      "result": "The published dashboard supports adding and searching categories, restoring deleted entries, and exporting data.",
      "features": [
        "Inventory summaries",
        "CSV and JSON transfer",
        "Undo and recovery"
      ]
    },
    title: 'Category Dashboard',
    category: 'Dashboards',
    label: 'Data management',
    summary: 'Organize inventory categories, review totals, and recover deleted or previous data in the browser.',
    stack: ['JavaScript', 'Testing', 'LocalStorage'],
    demo: 'https://givi588.github.io/category-dashboard/',
    code: 'https://github.com/givi588/category-dashboard',

  },
  {
    id: 'sales-inventory',
    title: 'Sales & Inventory Manager',
    category: 'Dashboards',
    label: 'Business tools',
    summary: 'A lightweight dashboard for tracking inventory, recording sales, spotting low stock and exporting reports.',
    stack: ['JavaScript', 'CSV', 'Browser storage'],
    demo: 'https://givi588.github.io/sales-inventory-manager-clean/',
    code: 'https://github.com/givi588/sales-inventory-manager-clean',

  },
  {
    id: 'react-training',
    title: 'React Training Dashboard',
    category: 'Dashboards',
    label: 'React application',
    summary: 'A task-management interface with priorities, search, status filters, dark mode and browser persistence.',
    stack: ['React', 'Vite', 'JavaScript'],
    demo: 'https://givi588.github.io/react-training-dashboard/',
    code: 'https://github.com/givi588/react-training-dashboard',

  },
  {
    id: 'python-inventory',
    title: 'Python Inventory Manager',
    category: 'Automation',
    label: 'CSV reporting script',
    summary: 'Reads sample inventory CSV files, totals stock value, identifies low-stock items and exports a report with input validation and unit tests.',
    stack: ['Python', 'CSV', 'Unit tests'],
    demo: null,
    code: 'https://github.com/givi588/python-inventory-manager',

  },
  {
    id: 'python-sales',
    title: 'Python Sales Calculator',
    category: 'Automation',
    label: 'Sales report automation',
    summary: 'Calculates sales revenue from sample CSV data and creates repeatable reports, with validation and automated tests across Python versions.',
    stack: ['Python', 'CSV', 'GitHub Actions'],
    demo: null,
    code: 'https://github.com/givi588/python-sales-calculator',

  },
];

export const services = [
  {
    title: 'Websites & landing pages',
    description: 'Responsive, readable and focused business websites that work across devices.',
    detail: 'HTML · CSS · JavaScript',
  },
  {
    title: 'React & TypeScript apps',
    description: 'Interactive tools with thoughtful forms, search, filters and clear user feedback.',
    detail: 'React · TypeScript · Vite',
  },
  {
    title: 'Python & CSV automation',
    description: 'Small tools that simplify repetitive calculations, cleanup and reporting.',
    detail: 'Python · CSV · Reporting',
  },
];

export const links = {
  github: 'https://github.com/givi588',
  linkedin: 'https://www.linkedin.com/in/givi-pruidze-43929944a/',
  inquiry: 'https://github.com/givi588/givi588/issues/new?template=project-inquiry.yml',
};
