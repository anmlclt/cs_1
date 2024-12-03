import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, Target, Lightbulb } from 'lucide-react';
import { Logo } from './Logo';

interface WelcomeModalProps {
  show: boolean;
  onStart: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ show, onStart }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-white/10 mt-48 md:mt-0"
        >
          <div className="p-6 md:p-8 flex flex-col items-center gap-4 md:gap-6">
            <Logo className="h-12 md:h-20" />
            
            <div className="space-y-4 md:space-y-6 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-white">How to Play</h2>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 text-white/80">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0" />
                  <p className="text-left text-sm md:text-base">Find the square with a slightly different color shade</p>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 text-white/80">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0" />
                  <p className="text-left text-sm md:text-base">Progress through levels - each one gets more challenging</p>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 text-white/80">
                  <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-left text-sm md:text-base">Use hints when stuck (available every 10 levels)</p>
                </div>
              </div>
            </div>

            <button
              onClick={onStart}
              className="mt-2 md:mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 
                       bg-blue-600 hover:bg-blue-500 text-white rounded-xl
                       transition-all duration-200 transform hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Start Game
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);