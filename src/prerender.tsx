import { renderToStaticMarkup } from 'react-dom/server';

import AppContent from './AppContent';

export function renderApp() {
  return renderToStaticMarkup(<AppContent />);
}
