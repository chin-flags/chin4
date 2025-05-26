"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GitBranch, ChevronRight } from "lucide-react";

interface Commit {
  date: string;
  message: string;
  author: string;
  hash: string;
  branch?: string;
}

type BranchName = "mechanical-engineering" | "acting" | "writing" | "hotfix/life-decision";

type CommitsData = Record<BranchName, Commit[]>;

export default function GitCareer() {
  const branches: BranchName[] = [
    "mechanical-engineering",
    "acting",
    "writing",
    "hotfix/life-decision",
  ];
  const [selectedBranch, setSelectedBranch] = useState<BranchName>("mechanical-engineering");

  const commitsData: CommitsData = {
    "mechanical-engineering": [
      {
        date: "Feb 23, 2025",
        message: "Didn't have enough GPA to enrol in computer engineering!",
        author: "chin",
        hash: "d3v123",
      },
      {
        date: "Feb 24, 2025",
        message: "Gear wheels looks amazing too, so started doing mechanical engineering",
        author: "chin",
        hash: "e4f567",
      },
      {
        date: "Mar 15, 2025",
        message: "Started internship at a gloves factory",
        author: "chin",
        hash: "g8h901",
      },
      {
        date: "Jun 10, 2025",
        message: "Started internship at a biscuits factory",
        author: "chin",
        hash: "i2j345",
      },
      {
        date: "May 20, 2026",
        message: "Graduated somehow!",
        author: "chin",
        hash: "k6l789",
      },
      {
        date: "Jun 05, 2026",
        message: "First job at a garment factory",
        author: "chin",
        hash: "m0n123",
      },
      {
        date: "Sep 15, 2027",
        message: "Moved to a natural gas company involved in healthcare",
        author: "chin",
        hash: "p4q567",
      },
      {
        date: "Dec 03, 2028",
        message: "Installed 30 Liquid oxygen tanks throughout the country",
        author: "chin",
        hash: "r8s901",
      },
      {
        date: "Jan 20, 2029",
        message: "Left mechanical engineering career",
        author: "chin",
        hash: "t2u345",
      },
    ],
    "acting": [
      {
        date: "Feb 10, 2029",
        message: "There was an opening in a small play. I was forced to join",
        author: "chin",
        hash: "v6w789",
      },
      {
        date: "Mar 05, 2029",
        message: "Thought of becoming an actor",
        author: "chin",
        hash: "x0y123",
      },
      {
        date: "Mar 20, 2029",
        message: "Did a few stage plays in school days",
        author: "chin",
        hash: "z4a567",
      },
      {
        date: "Apr 15, 2029",
        message: "Joined a team to go for a competition",
        author: "chin",
        hash: "b8c901",
      },
      {
        date: "May 02, 2029",
        message: "Mixed up dialog in a sad scene during rehearsals, audience laughed",
        author: "chin",
        hash: "d2e345",
      },
      {
        date: "May 10, 2029",
        message: "Mixed up dialog in a sad scene during rehearsals, audience laughed, again",
        author: "chin",
        hash: "f6g789",
      },
      {
        date: "Jun 20, 2029",
        message: "So close to getting fired, but I made it to the end",
        author: "chin",
        hash: "h0i123",
      },
      {
        date: "Jul 15, 2029",
        message: "Joined a street drama team performing at an international book fair",
        author: "chin",
        hash: "j4k567",
      },
      {
        date: "Jul 20, 2029",
        message: "Wanted to leave as it was embarrassing because there wasn't a stage",
        author: "chin",
        hash: "l8m901",
      },
      {
        date: "Aug 05, 2029",
        message: "Ended up enjoying it",
        author: "chin",
        hash: "n2o345",
      },
      {
        date: "Sep 10, 2029",
        message: "Combined all street plays and made it a stage play",
        author: "chin",
        hash: "p6q789",
      },
      {
        date: "Oct 15, 2029",
        message: "That was supposed to be a paying gig. Still waiting for payment",
        author: "chin",
        hash: "r0s123",
      },
      {
        date: "Nov 20, 2029",
        message: "Acted in a TV commercial, don't know if it got telecasted",
        author: "chin",
        hash: "t4u567",
      },
      {
        date: "Dec 05, 2029",
        message: "Acted in a national level play",
        author: "chin",
        hash: "v8w901",
      },
      {
        date: "Jan 10, 2030",
        message: "First stage play in the university",
        author: "chin",
        hash: "x2y345",
      },
      {
        date: "Feb 15, 2030",
        message: "Acted in an open air theatre, it rained before the play",
        author: "chin",
        hash: "z6a789",
      },
      {
        date: "Mar 20, 2030",
        message: "Took a bribe for giving a role to a friend, he finished my mechatronics project",
        author: "chin",
        hash: "b0c123",
      },
      {
        date: "Apr 25, 2030",
        message: "Wrote the screenplay with artificial scenes with myself and a crush",
        author: "chin",
        hash: "d4e567",
      },
      {
        date: "May 30, 2030",
        message: "That play was a huge success with an audience of around 2500",
        author: "chin",
        hash: "f8g901",
      },
    ],
    "writing": [
      {
        date: "Dec 21, 2024",
        message: "Collected all the books I had, there were just 3",
        author: "chin",
        hash: "h2i345",
      },
      {
        date: "Nov 07, 2024",
        message: "Thinking of writing a book by myself",
        author: "chin",
        hash: "j6k789",
      },
      {
        date: "Nov 15, 2024",
        message: "Started writing a book, looks like a bad copy of Enid Blyton's book",
        author: "chin",
        hash: "l0m123",
      },
      {
        date: "Dec 05, 2024",
        message: "Started writing another book, looks like a bad copy of Enid Blyton's book",
        author: "chin",
        hash: "n4o567",
      },
      {
        date: "Jan 10, 2025",
        message: "Finished the 3rd book, looks like a bad copy of Sherlock Holmes mystery",
        author: "chin",
        hash: "p8q901",
      },
      {
        date: "Jan 20, 2025",
        message: "Sent the book to a newspaper, they didn't publish it",
        author: "chin",
        hash: "r2s345",
      },
      {
        date: "Feb 05, 2025",
        message: "Sent a few stories to multiple newspapers, guess the address was wrong",
        author: "chin",
        hash: "t6u789",
      },
      {
        date: "Mar 15, 2025",
        message: "Sent the book to a writing competition, won a merit prize",
        author: "chin",
        hash: "v0w123",
      },
      {
        date: "Apr 10, 2025",
        message: "Called a publisher, they said it costs a lot and you are just a child",
        author: "chin",
        hash: "x4y567",
      },
      {
        date: "Jun 20, 2025",
        message: "Wrote a few screenplays",
        author: "chin",
        hash: "z8a901",
      },
      {
        date: "Aug 15, 2025",
        message: "Started writing in aniwarathe.lk, my own blog",
        author: "chin",
        hash: "b2c345",
      },
    ],
    "hotfix/life-decision": [
      {
        date: "Sep 01, 2030",
        message: "Critical decision: pivot to software engineering",
        author: "chin",
        hash: "d6e789",
      },
      {
        date: "Sep 15, 2030",
        message: "Started learning HTML and CSS",
        author: "chin",
        hash: "f0g123",
      },
      {
        date: "Oct 10, 2030",
        message: "Built first website for a friend's business",
        author: "chin",
        hash: "h4i567",
      },
    ]
  };

  // Function to get commits for the selected branch
  const getCommits = (): Commit[] => {
    return commitsData[selectedBranch]?.map(commit => ({
      ...commit,
      branch: selectedBranch
    })) || [];
  };

  return (
    <div className="bg-gray-900 mb-16 text-green-500 w-full mx-auto font-mono shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">~/life-story</span>
          <span className="text-gray-500">(</span>
          <span className="text-yellow-500">{selectedBranch}</span>
          <span className="text-gray-500">)</span>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-gray-900 text-green-500 hover:bg-gray-800">
              <GitBranch className="mr-2" /> Switch Branch
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-900 text-green-500">
            {branches.map((branch) => (
              <DropdownMenuItem
                key={branch}
                onClick={() => setSelectedBranch(branch)}
                className={`hover:bg-gray-800 cursor-pointer ${
                  branch === selectedBranch ? 'bg-gray-800 text-yellow-500' : ''
                }`}
              >
                {branch}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="bg-gray-900 rounded overflow-y-auto max-h-[70vh]">
        <div className="mb-4">
          <span className="text-green-500">$ git log --oneline --decorate {selectedBranch}</span>
        </div>
        
        <div className="space-y-3">
          {getCommits().map((commit: Commit, index: number) => (
            <div key={index} className="flex">
              <div className="text-yellow-500 mr-2 min-w-[8ch]">{commit.hash.substring(0, 7)}</div>
              <div>
                <p className="text-green-400">{commit.message}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Author: {commit.author} | Date: {commit.date}</span>
                  {commit.branch && (
                    <span className="ml-2 text-blue-400">({commit.branch})</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex items-center">
          <ChevronRight className="text-green-500" />
          <span className="text-green-500 animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
}
