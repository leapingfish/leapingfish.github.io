import wkhtmltopdf from 'wkhtmltopdf';

// output to a file directly
wkhtmltopdf('http://apple.com/', { output: 'out.pdf' });
