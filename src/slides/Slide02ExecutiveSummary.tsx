import { CheckCircle } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Slide02ExecutiveSummary = {
  type: 'content',
  title: 'The Opportunity',
  subtitle: 'Day-1 revenue + licensed platform + institutional pipeline',
  content: (
    <div className="space-y-8">
      <motion.div
        className="grid grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-blue-900 mb-3">
            $<CountUp end={72} duration={1.5} />M
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-700">Immediate AUM (~CHF 60M)</div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-green-900 mb-3">Day 1</div>
          <div className="text-sm font-semibold uppercase tracking-wider text-green-700">Licensed & Banked</div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-purple-900 mb-3">
            $<CountUp end={20} duration={1.5} />-<CountUp end={30} duration={1.5} />M
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-700">LOI Pipeline</div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-orange-900 mb-3">
            <CountUp end={50} duration={1.5} />%+
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-orange-700">EBITDA Margins</div>
        </motion.div>
      </motion.div>

      <div className="bg-blue-900 text-white p-10 rounded-lg">
        <h3 className="text-2xl font-light mb-6 border-b border-blue-700 pb-4">Why Mira Labs Wins</h3>
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-base">
          <div className="flex gap-4">
            <CheckCircle className="text-blue-300 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-blue-100 mb-1">Regulated Day 1</div>
              <div className="text-blue-200 text-base">FINMA + CSSF licenses with Tier-1 banking. 18-36 month moat.</div>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-blue-300 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-blue-100 mb-1">Immediate Cash Flow</div>
              <div className="text-blue-200 text-base">$72M (~CHF 60M) AUM = $1.0M+ annual fees from day one.</div>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-blue-300 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-blue-100 mb-1">Proven Team</div>
              <div className="text-blue-200 text-base">$10B+ trading experience, $300M AUM managed, 3.6x growth.</div>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-blue-300 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-blue-100 mb-1">Institutional Tech</div>
              <div className="text-blue-200 text-base">FPGA execution infrastructure, bank-grade custody.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-lg border-l-4 border-blue-500">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xl font-light mb-2">Pre-Seed Investment</div>
            <div className="text-base text-slate-300">Flexible structures | Board seat | Pro-rata rights</div>
          </div>
          <div className="text-right">
            <div className="text-5xl font-light text-blue-400">$2-5M</div>
            <div className="text-base text-slate-400 mt-2">$18M pre-money cap</div>
          </div>
        </div>
      </div>
    </div>
  )
};
