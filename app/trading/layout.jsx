import AuthGuard from "../Context/AuthGuard";
import AMacroCheck from "./aMacroCheck/page";
import BMarketBias from "./bMarketBias.jsx/page";
import CStructure from "./cStructure/cStructure";
import DKeyAreas from "./dKeyAreas/dKeyAreas";
import ETrendConfirmation from "./eTrendConfirmation/eTrendConfirmation";
import FEntryConfirmation from "./fEntryConfirmation/fEntryConfirmation";
import GPatternRecognition from "./gPatternRecognition/gPatternRecognition";
import HConfluences from "./hConfluences/hConfluences";
import IRiskManagement from "./iRiskManagement/iRiskManagement";
import JPsychology from "./jPsychology/jPsychology";
import KFinalDecision from "./kFinalDecision/kFinalDecision";
import Sidebar from "./sharedComp/Sidebar";
import Topbar from "./sharedComp/Topbar";

export default function AdminLayout({ children }) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-zinc-100">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Topbar />

          <main className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-10">
            {/* {children} */}

            <AMacroCheck />
            <BMarketBias />
            <CStructure />
            <DKeyAreas />
            <ETrendConfirmation />
            <FEntryConfirmation />
            <GPatternRecognition />
            <HConfluences />
            <IRiskManagement />
            <JPsychology />
            <KFinalDecision />
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}