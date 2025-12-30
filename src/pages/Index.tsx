import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { CandidatesList } from "@/components/CandidatesList";
import { VideoPlayer } from "@/components/VideoPlayer";
import { QuestionList } from "@/components/QuestionList";
import { TeamFeedback } from "@/components/TeamFeedback";
import { AIScoreSummary } from "@/components/AIScoreSummary";
import { AIScoreDetail } from "@/components/AIScoreDetail";

const candidates = [
  { id: "1", name: "Seo Jan Im", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", score: 85, status: "approved" as const },
  { id: "2", name: "Devon Lane", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", score: 55, status: "rejected" as const },
  { id: "3", name: "Arlene Mcoy", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", score: 95, status: "approved" as const },
  { id: "4", name: "Esther Howard", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", score: 48, status: "rejected" as const },
  { id: "5", name: "Jane Coper", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100", score: 78, status: "approved" as const },
];

const cseQuestions = [
  { id: 1, text: "What is the difference between a process and a thread?" },
  { id: 2, text: "Explain the concept of Object-Oriented Programming." },
  { id: 3, text: "What is a database index and why is it important?" },
  { id: 4, text: "Describe the difference between TCP and UDP protocols." },
  { id: 5, text: "What is Big O notation and why does it matter?" },
  { id: 6, text: "Explain how a hash table works internally." },
  { id: 7, text: "What is the difference between SQL and NoSQL databases?" },
  { id: 8, text: "How does garbage collection work in programming?" },
  { id: 9, text: "What is RESTful API architecture?" },
  { id: 10, text: "Explain the concept of recursion with an example." },
  { id: 11, text: "What is the difference between stack and heap memory?" },
  { id: 12, text: "Describe the MVC design pattern and its benefits." },
];

const teamMembers = [
  { name: "Leslie Alexander", role: "Human Resource", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100", rating: 4 },
  { name: "Guy Hawkins", role: "Chief Executive Officer", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", rating: 4 },
  { name: "Kristin Watson", role: "Project Manager Lead", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100", rating: 5 },
];

const scoreCategories = [
  { label: "Professionalism", score: 80 },
  { label: "Business Acumen", score: 90 },
  { label: "Opportunistic", score: 65 },
  { label: "Closing Technique", score: 85 },
];

export default function Index() {
  const [selectedCandidate, setSelectedCandidate] = useState("1");

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header 
          title="AI Interview Platform"
          subtitle="Assistant Project Manager"
          userName="Kristin Watson"
          userAvatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
        />

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-12 gap-6 h-full">
            {/* Left Column - Candidates + Video */}
            <div className="col-span-8 flex flex-col gap-6">
              <div className="flex gap-6">
                {/* Candidates List */}
                <CandidatesList 
                  candidates={candidates}
                  selectedId={selectedCandidate}
                  onSelect={setSelectedCandidate}
                  className="w-72 shrink-0"
                />

                {/* Video Player */}
                <VideoPlayer
                  candidateName="Seo Jan Im"
                  candidateRole="Talent"
                  currentQuestion="Why do you think you are good at CSE?"
                  questionNumber={2}
                  currentTime="01:00"
                  totalTime="05:00"
                  progress={20}
                  className="flex-1"
                />
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-3 gap-6">
                <TeamFeedback members={teamMembers} />
                <QuestionList questions={cseQuestions} currentQuestion={2} />
                <AIScoreSummary 
                  score={85}
                  description="The presentation of talent is good. Check the breakdown summary off AI Video Score."
                />
              </div>
            </div>

            {/* Right Column - Score Detail */}
            <div className="col-span-4">
              <AIScoreDetail categories={scoreCategories} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
