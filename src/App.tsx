import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
  Slide01Title,
  Slide02MarketOpportunity,
  Slide02ExecutiveSummary,
  Slide03StrategicRationale,
  Slide04CompetitiveLandscape,
  Slide04LeadershipTeam,
  Slide05InstitutionalInfrastructure,
  Slide06FinancialModel,
  Slide07InvestmentTerms,
  Slide08PlatformBusinessModel,
  Slide09TechnologyMarketSolution,
  Slide10ValuationFramework
} from './slides';

const MiraLabsPitch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoom, setZoom] = useState(1);

  const slides = [
    Slide01Title,
    Slide02MarketOpportunity,
    Slide02ExecutiveSummary,
    Slide03StrategicRationale,
    Slide04CompetitiveLandscape,
    Slide04LeadershipTeam,
    Slide05InstitutionalInfrastructure,
    Slide06FinancialModel,
    Slide07InvestmentTerms,
    Slide08PlatformBusinessModel,
    Slide09TechnologyMarketSolution,
    Slide10ValuationFramework
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          if (currentSlide < slides.length - 1) {
            nextSlide();
          }
          break;
        case 'ArrowLeft':
        case 'PageUp':
          if (currentSlide > 0) {
            prevSlide();
          }
          break;
        case 'Home':
          goToSlide(0);
          break;
        case 'End':
          goToSlide(slides.length - 1);
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, zoom]);

  // PDF Export functionality
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  const exportToPDF = async () => {
    if (isExporting) return;

    const captureElement = document.getElementById('slide-capture') as HTMLElement | null;

    if (!captureElement) {
      alert('Unable to locate the presentation container.');
      return;
    }

    const EXPORT_WIDTH = 1920;
    const EXPORT_HEIGHT = 1080;

    setIsExporting(true);
    setExportProgress(0);

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [EXPORT_WIDTH, EXPORT_HEIGHT]
    });
    const originalSlide = currentSlide;
    const originalZoom = zoom;
    const originalBodyOverflow = document.body.style.overflow;

    try {
      document.body.style.overflow = 'hidden';
      captureElement.classList.add('export-mode');

      // Reset zoom for consistent export
      setZoom(1);
      await new Promise(resolve => setTimeout(resolve, 800));

      for (let i = 0; i < slides.length; i++) {
        setCurrentSlide(i);
        setExportProgress(Math.round(((i + 1) / slides.length) * 100));

        // Wait longer for slide to render and animations to complete
        await new Promise(resolve => setTimeout(resolve, 2000));

        captureElement.scrollTo({ top: 0 });

        const elementWidth = captureElement.offsetWidth;
        const elementHeight = captureElement.offsetHeight;

        const canvas = await html2canvas(captureElement, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: '#ffffff',
          width: elementWidth,
          height: elementHeight,
          windowWidth: elementWidth,
          windowHeight: elementHeight,
          scrollY: 0,
          scrollX: 0,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.98);

        if (i > 0) pdf.addPage();

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        let renderWidth = EXPORT_WIDTH;
        let renderHeight = (canvasHeight / canvasWidth) * renderWidth;

        if (renderHeight > EXPORT_HEIGHT) {
          renderHeight = EXPORT_HEIGHT;
          renderWidth = (canvasWidth / canvasHeight) * renderHeight;
        }

        const offsetX = (EXPORT_WIDTH - renderWidth) / 2;
        const offsetY = (EXPORT_HEIGHT - renderHeight) / 2;

        pdf.addImage(imgData, 'JPEG', offsetX, offsetY, renderWidth, renderHeight, undefined, 'FAST');
      }

      pdf.save('Mira-Labs-Pitch-Deck-2025.pdf');
    } catch (error) {
      console.error('Error exporting PDF:', error);
      alert('PDF export failed. Please try again.');
    } finally {
      captureElement.classList.remove('export-mode');
      document.body.style.overflow = originalBodyOverflow;
      setCurrentSlide(originalSlide);
      setZoom(originalZoom);
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Export Progress Modal */}
      {isExporting && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
              Exporting PDF...
            </h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Progress</span>
                <span className="font-semibold">{exportProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-green-500 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${exportProgress}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-slate-600 text-center">
              Capturing slide {Math.ceil((exportProgress / 100) * slides.length)} of {slides.length}...
            </p>
            <p className="text-xs text-slate-500 text-center mt-2">
              Please wait, this takes about 20-25 seconds.
            </p>
          </div>
        </div>
      )}

      <div id="slide-capture" className="flex-1 relative bg-white overflow-hidden">
        {slides[currentSlide].type === 'content' && (
          <div className="absolute top-0 left-0 right-0 bg-slate-900 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-tight mb-1">
                  {(slides[currentSlide] as any).title}
                </h2>
                {(slides[currentSlide] as any).subtitle && (
                  <div className="text-xs sm:text-sm text-slate-400 font-light">
                    {(slides[currentSlide] as any).subtitle}
                  </div>
                )}
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs text-slate-400 uppercase tracking-widest">CONFIDENTIAL</div>
                <div className="text-xs text-slate-500 mt-1">Slide {currentSlide + 1} of {slides.length}</div>
              </div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={
              slides[currentSlide].type === 'content'
                ? 'pt-20 sm:pt-22 md:pt-24 pb-12 sm:pb-14 px-4 sm:px-5 md:px-6 lg:px-8 h-full overflow-y-auto slide-content export-scroll'
                : 'h-full slide-content export-scroll'
            }
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>

        {slides[currentSlide].type === 'content' && (
          <div className="absolute bottom-0 left-0 right-0 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">MIRA LABS | Pre-Seed Investment Opportunity</div>
            <div className="text-xs text-slate-500 text-center sm:text-right">New York • Luzern • Luxembourg • Singapore</div>
          </div>
        )}
      </div>

      <div className="bg-slate-900 px-2 sm:px-4 md:px-8 py-2 sm:py-3 flex items-center justify-between border-t border-slate-700">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-2 text-xs sm:text-sm font-light transition-all ${
            currentSlide === 0
              ? 'text-slate-600 cursor-not-allowed'
              : 'text-white hover:text-blue-400'
          }`}
        >
          <ChevronLeft size={16} className="sm:hidden" />
          <ChevronLeft size={18} className="hidden sm:block" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-4 sm:w-6 md:w-8'
                  : 'bg-slate-600 w-1 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <button
            onClick={exportToPDF}
            disabled={isExporting}
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-xs sm:text-sm font-light transition-all border-r border-slate-700 pr-3 ${
              isExporting
                ? 'text-yellow-400 cursor-wait'
                : 'text-white hover:text-green-400 cursor-pointer'
            }`}
            title={isExporting ? 'Exporting... Please wait' : 'Export PDF (recommended)'}
          >
            {isExporting ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="hidden sm:inline">Exporting...</span>
              </>
            ) : (
              <>
                <Download size={16} />
                <span className="hidden sm:inline">Export PDF</span>
              </>
            )}
          </button>
          <span className="text-slate-400 text-xs sm:text-sm font-light">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-2 text-xs sm:text-sm font-light transition-all ${
              currentSlide === slides.length - 1
                ? 'text-slate-600 cursor-not-allowed'
                : 'text-white hover:text-blue-400'
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={18} className="hidden sm:block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiraLabsPitch;
