// components/audit/ClientPitchGenerator.jsx
import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';

export default function ClientPitchGenerator({ pageName, failedItems }) {
  const [copied, setCopied] = useState(false);

  // Generate dynamic pitch message
  const topIssues = failedItems.slice(0, 3).map(i => `• ${i.name}`).join('\n');
  const issueCount = failedItems.length;

  const pitchMessage = `Hi ${pageName || 'there'}! 👋\n\nI was just reviewing your Facebook page and noticed a few quick optimization fixes (like your ${failedItems[0]?.name || 'profile details'} and setup) that might be costing you inbound customer leads.\n\nWe spotted ${issueCount} priority items to clean up, including:\n${topIssues}\n\nWould you be open to a quick, free summary report showing how to fix these up to boost your page conversions? Let me know!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pitchMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 space-y-4">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
          <Send className="w-4 h-4 text-indigo-500" />
          <span>Client Outreach Pitch</span>
        </h2>
        {failedItems.length > 0 && (
          <button
            onClick={handleCopy}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy WhatsApp Pitch'}</span>
          </button>
        )}
      </div>

      {failedItems.length === 0 ? (
        <div className="py-4 text-center text-slate-400 text-xs">
          Flag at least one item as "Fix" to generate a ready-to-send client pitch message.
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-xs text-slate-500">
            Preview of the automated outreach message generated from your audit findings:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 whitespace-pre-line font-mono leading-relaxed">
            {pitchMessage}
          </div>
        </div>
      )}
    </div>
  );
}