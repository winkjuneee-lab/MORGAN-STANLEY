import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      const { error } = this.state;
      let errorMessage = 'An unexpected error occurred.';
      let details = '';

      try {
        if (error?.message) {
          const parsed = JSON.parse(error.message);
          if (parsed.error) {
            errorMessage = 'Permission Denied: You do not have access to this data.';
            details = `Operation: ${parsed.operationType} on ${parsed.path}`;
          }
        }
      } catch (e) {
        errorMessage = error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-sm border-t-4 border-red-500">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">System Error</h2>
            <p className="text-gray-600 mb-6">{errorMessage}</p>
            {details && (
              <div className="bg-gray-50 p-3 rounded text-xs font-mono text-gray-500 mb-6">
                {details}
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 bg-brand-dark text-white font-bold hover:bg-brand-blue transition-all"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
