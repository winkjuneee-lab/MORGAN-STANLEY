import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { db, auth, handleFirestoreError, OperationType } from '../firebase';
import { collection, query, onSnapshot, orderBy, doc, updateDoc } from 'firebase/firestore';
import { FileText, Clock, CheckCircle, XCircle, User, Mail, Phone, MapPin, Briefcase, Calendar } from 'lucide-react';

export default function AdminPortal() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<any | null>(null);

  useEffect(() => {
    const path = 'loanApplications';
    const q = query(
      collection(db, path),
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

  const updateStatus = async (id: string, status: string) => {
    try {
      await updateDoc(doc(db, 'loanApplications', id), { status });
      setSelectedApp(null);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="text-green-500" size={20} />;
      case 'rejected': return <XCircle className="text-red-500" size={20} />;
      default: return <Clock className="text-yellow-500" size={20} />;
    }
  };

  return (
    <div className="container-custom py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-serif text-brand-dark mb-2">Admin Portal</h1>
        <p className="text-gray-600">Review and manage all loan applications.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* List of Applications */}
        <div className="lg:col-span-4 bg-white shadow-sm overflow-hidden h-[600px] flex flex-col">
          <div className="p-4 border-b border-gray-100 flex items-center space-x-2 bg-gray-50">
            <FileText className="text-brand-blue" size={18} />
            <h2 className="text-sm font-bold text-brand-dark uppercase tracking-widest">Applications</h2>
          </div>
          <div className="flex-grow overflow-y-auto divide-y divide-gray-100">
            {loading ? (
              <div className="p-8 text-center text-gray-400">Loading...</div>
            ) : applications.length === 0 ? (
              <div className="p-8 text-center text-gray-400">No applications</div>
            ) : (
              applications.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className={`w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                    selectedApp?.id === app.id ? 'bg-brand-blue/5 border-l-4 border-brand-blue' : ''
                  }`}
                >
                  <div>
                    <div className="font-bold text-brand-dark">{app.name}</div>
                    <div className="text-xs text-gray-500">${app.loanRequest.toLocaleString()}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(app.status)}
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      app.status === 'approved' ? 'text-green-600' : 
                      app.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Application Details */}
        <div className="lg:col-span-8 bg-white shadow-sm overflow-hidden h-[600px] flex flex-col">
          {selectedApp ? (
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                    <User size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif text-brand-dark">{selectedApp.name}</h2>
                    <p className="text-xs text-gray-500">Submitted on {selectedApp.createdAt?.toDate().toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => updateStatus(selectedApp.id, 'approved')}
                    className="px-4 py-2 bg-green-500 text-white text-xs font-bold uppercase tracking-widest hover:bg-green-600 transition-colors"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => updateStatus(selectedApp.id, 'rejected')}
                    className="px-4 py-2 bg-red-500 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              </div>

              <div className="flex-grow overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b pb-2">Personal Information</h3>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail size={16} className="text-gray-400" />
                    <span className="text-gray-600">{selectedApp.emailAddress}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone size={16} className="text-gray-400" />
                    <span className="text-gray-600">{selectedApp.phoneNumber}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-gray-600">{selectedApp.address}, {selectedApp.country}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <User size={16} className="text-gray-400" />
                    <span className="text-gray-600">{selectedApp.sex}, {selectedApp.age} years old</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Briefcase size={16} className="text-gray-400" />
                    <span className="text-gray-600">{selectedApp.occupation}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b pb-2">Loan Details</h3>
                  <div className="bg-brand-blue/5 p-4 rounded-sm">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Requested Amount</div>
                    <div className="text-2xl font-serif text-brand-dark">${selectedApp.loanRequest.toLocaleString()}</div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-gray-600">Duration: {selectedApp.loanDuration}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Briefcase size={16} className="text-gray-400" />
                    <span className="text-gray-600">Monthly Income: ${selectedApp.monthlyIncome.toLocaleString()}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Purpose</div>
                    <p className="text-sm text-gray-600 leading-relaxed italic">"{selectedApp.purposeOfLoan}"</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center text-gray-400 flex-col space-y-4">
              <FileText size={48} className="opacity-20" />
              <p>Select an application to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
