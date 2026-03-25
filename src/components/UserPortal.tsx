import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { db, auth, handleFirestoreError, OperationType } from '../firebase';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import LoanApplicationForm from './LoanApplicationForm';
import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function UserPortal() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return;

    const path = 'loanApplications';
    const q = query(
      collection(db, path),
      where('uid', '==', auth.currentUser.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setApplications(apps);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    });

    return () => unsubscribe();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="text-green-500" size={20} />;
      case 'rejected': return <XCircle className="text-red-500" size={20} />;
      default: return <Clock className="text-yellow-500" size={20} />;
    }
  };

  return (
    <div className="container-custom py-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-serif text-brand-dark mb-2">Client Portal</h1>
          <p className="text-gray-600">Manage your investment accounts and loan applications.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-8 py-3 bg-brand-dark text-white font-bold hover:bg-brand-blue transition-all"
        >
          {showForm ? 'View My Applications' : 'New Loan Application'}
        </button>
      </div>

      {showForm ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <LoanApplicationForm />
        </motion.div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-sm border-t-4 border-brand-blue">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Total Applications</div>
              <div className="text-3xl font-serif text-brand-dark">{applications.length}</div>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-green-500">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Approved</div>
              <div className="text-3xl font-serif text-brand-dark">
                {applications.filter(a => a.status === 'approved').length}
              </div>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-yellow-500">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Pending</div>
              <div className="text-3xl font-serif text-brand-dark">
                {applications.filter(a => a.status === 'pending').length}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center space-x-2">
              <FileText className="text-brand-blue" size={20} />
              <h2 className="text-xl font-serif text-brand-dark">Recent Applications</h2>
            </div>
            
            {loading ? (
              <div className="p-12 text-center text-gray-400">Loading applications...</div>
            ) : applications.length === 0 ? (
              <div className="p-12 text-center text-gray-400">No applications found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Purpose</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {app.createdAt?.toDate().toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 font-bold text-brand-dark">
                          ${app.loanRequest.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {app.purposeOfLoan}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(app.status)}
                            <span className={`text-xs font-bold uppercase tracking-widest ${
                              app.status === 'approved' ? 'text-green-600' : 
                              app.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'
                            }`}>
                              {app.status}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
