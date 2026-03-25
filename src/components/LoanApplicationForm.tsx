import React, { useState } from 'react';
import { motion } from 'motion/react';
import { db, auth, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Loader2, CheckCircle } from 'lucide-react';

export default function LoanApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    sex: '',
    age: '',
    country: '',
    occupation: '',
    loanRequest: '',
    purposeOfLoan: '',
    loanDuration: '',
    monthlyIncome: '',
    phoneNumber: '',
    emailAddress: auth.currentUser?.email || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;
    
    setLoading(true);
    setError(null);

    const path = 'loanApplications';
    try {
      await addDoc(collection(db, path), {
        uid: auth.currentUser.uid,
        name: formData.name,
        address: formData.address,
        sex: formData.sex,
        age: Number(formData.age),
        country: formData.country,
        occupation: formData.occupation,
        loanRequest: Number(formData.loanRequest),
        purposeOfLoan: formData.purposeOfLoan,
        loanDuration: formData.loanDuration,
        monthlyIncome: Number(formData.monthlyIncome),
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
    } catch (err: any) {
      handleFirestoreError(err, OperationType.WRITE, path);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-sm shadow-sm text-center">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h3 className="text-2xl font-serif text-brand-dark mb-2">Application Submitted</h3>
        <p className="text-gray-600">Your loan application has been received and is currently under review.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      <h2 className="text-3xl font-serif text-brand-dark mb-8 border-b pb-4">APPLICATION FORM</h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 border-l-4 border-red-500 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            required
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1 md:col-span-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Address</label>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sex</label>
          <select
            name="sex"
            required
            value={formData.sex}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Age</label>
          <input
            type="number"
            name="age"
            required
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Country</label>
          <input
            type="text"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Occupation</label>
          <input
            type="text"
            name="occupation"
            required
            value={formData.occupation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Loan Request (Amount)</label>
          <input
            type="number"
            name="loanRequest"
            required
            value={formData.loanRequest}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Loan Duration</label>
          <input
            type="text"
            name="loanDuration"
            required
            placeholder="e.g. 24 months"
            value={formData.loanDuration}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Monthly Income</label>
          <input
            type="number"
            name="monthlyIncome"
            required
            value={formData.monthlyIncome}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="space-y-1 md:col-span-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Purpose of Loan</label>
          <textarea
            name="purposeOfLoan"
            required
            rows={3}
            value={formData.purposeOfLoan}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 focus:border-brand-blue outline-none transition-all"
          />
        </div>

        <div className="md:col-span-2 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-brand-dark text-white font-bold hover:bg-brand-blue transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <span>Submit</span>}
          </button>
        </div>
      </form>
    </div>
  );
}
