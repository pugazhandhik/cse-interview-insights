import { Header } from "@/components/Header";
import { ScoreRing } from "@/components/ScoreRing";
import { AIScoreDetail } from "@/components/AIScoreDetail";
import { Button } from "@/components/ui/button";
import { Check, Download, Trophy, Target, Lightbulb, Users } from "lucide-react";

const interviewResults = {
  candidate: {
    name: "Seo Jan Im",
    role: "Software Engineer Candidate",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    email: "seo.janim@email.com",
    phone: "+1 (555) 123-4567",
  },
  overallScore: 85,
  categories: [
    { label: "Technical Knowledge", score: 88, icon: Lightbulb },
    { label: "Problem Solving", score: 82, icon: Target },
    { label: "Communication", score: 90, icon: Users },
    { label: "Overall Performance", score: 85, icon: Trophy },
  ],
  questionScores: [
    { id: 1, question: "Process vs Thread difference", score: 90, feedback: "Excellent understanding of OS concepts" },
    { id: 2, question: "OOP Concepts", score: 85, feedback: "Strong grasp of fundamental principles" },
    { id: 3, question: "Database Indexing", score: 88, feedback: "Good practical knowledge" },
    { id: 4, question: "TCP vs UDP", score: 75, feedback: "Could elaborate more on use cases" },
    { id: 5, question: "Big O Notation", score: 92, feedback: "Outstanding algorithmic understanding" },
    { id: 6, question: "Hash Table Implementation", score: 80, feedback: "Solid foundation, room for depth" },
    { id: 7, question: "SQL vs NoSQL", score: 85, feedback: "Well-explained tradeoffs" },
    { id: 8, question: "Garbage Collection", score: 78, feedback: "Good general knowledge" },
    { id: 9, question: "RESTful APIs", score: 90, feedback: "Excellent practical experience" },
    { id: 10, question: "Recursion Concepts", score: 88, feedback: "Clear explanation with examples" },
    { id: 11, question: "Stack vs Heap Memory", score: 82, feedback: "Good memory management understanding" },
    { id: 12, question: "MVC Pattern", score: 87, feedback: "Strong architectural knowledge" },
  ],
  strengths: [
    "Strong algorithmic thinking and problem-solving skills",
    "Excellent communication and articulation",
    "Deep understanding of system design concepts",
    "Practical experience with modern technologies",
  ],
  improvements: [
    "Could dive deeper into networking concepts",
    "More hands-on examples would strengthen responses",
  ],
  recommendation: "Highly Recommended for the next round",
  status: "approved" as const,
};

const scoreCategories = [
  { label: "Professionalism", score: 80 },
  { label: "Business Acumen", score: 90 },
  { label: "Opportunistic", score: 65 },
  { label: "Closing Technique", score: 85 },
];

export default function Index() {
  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title="Interview Results"
          subtitle="One-on-One Assessment"
          userName="Kristin Watson"
          userAvatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
        />

        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-8 space-y-6">
              {/* Candidate Profile Card */}
              <div className="bg-card rounded-xl p-6 animate-slide-up">
                <div className="flex items-start gap-6">
                  <img 
                    src={interviewResults.candidate.avatar}
                    alt={interviewResults.candidate.name}
                    className="w-24 h-24 rounded-xl object-cover ring-4 ring-primary/20"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-heading text-2xl font-bold">{interviewResults.candidate.name}</h2>
                      <span className="status-badge status-approved flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        {interviewResults.status === "approved" ? "Approved" : "Rejected"}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{interviewResults.candidate.role}</p>
                    <div className="flex gap-6 text-sm">
                      <span className="text-muted-foreground">{interviewResults.candidate.email}</span>
                      <span className="text-muted-foreground">{interviewResults.candidate.phone}</span>
                    </div>
                  </div>
                  <Button className="gap-2">
                    <Download className="w-4 h-4" />
                    Export Report
                  </Button>
                </div>
              </div>

              {/* Score Categories */}
              <div className="bg-card rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="font-heading font-semibold text-lg mb-6">Performance Overview</h3>
                <div className="grid grid-cols-4 gap-6">
                  {interviewResults.categories.map((category, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <ScoreRing score={category.score} size="md" />
                      <p className="text-sm text-muted-foreground mt-2">{category.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Question-by-Question Results */}
              <div className="bg-card rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-heading font-semibold text-lg mb-4">Question-by-Question Analysis</h3>
                <div className="space-y-3">
                  {interviewResults.questionScores.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                        {item.id}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.question}</p>
                        <p className="text-xs text-muted-foreground">{item.feedback}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-10 text-right">{item.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-4 space-y-6">
              {/* Overall Score */}
              <div className="bg-card rounded-xl p-6 text-center animate-slide-up">
                <h3 className="font-heading font-semibold text-lg mb-4">Overall Score</h3>
                <ScoreRing score={interviewResults.overallScore} size="lg" />
                <p className="mt-4 text-sm text-muted-foreground">
                  Based on 12 CSE interview questions
                </p>
              </div>

              {/* AI Video Score Detail */}
              <AIScoreDetail categories={scoreCategories} className="animate-slide-up" style={{ animationDelay: "0.05s" }} />

              {/* Strengths */}
              <div className="bg-card rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  Key Strengths
                </h3>
                <ul className="space-y-2">
                  {interviewResults.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas for Improvement */}
              <div className="bg-card rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-warning/10 flex items-center justify-center">
                    <Target className="w-3 h-3 text-warning" />
                  </span>
                  Areas for Growth
                </h3>
                <ul className="space-y-2">
                  {interviewResults.improvements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendation */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="font-heading font-semibold text-lg mb-2">Final Recommendation</h3>
                <p className="text-primary font-medium">{interviewResults.recommendation}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <Button className="w-full" size="lg">
                  Proceed to Next Round
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Schedule Follow-up
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
