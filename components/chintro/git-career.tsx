"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GitBranch } from "lucide-react";

interface Commit {
  date: string;
  message: string;
  author: string;
  hash: string;
  branch?: string;
}

type BranchName = "mechanical-engineering" | "acting" | "writing";

type CommitsData = Record<BranchName, Commit[]>;

export default function GitCareer() {
  const [isBlinking, setIsBlinking] = useState(true);
  const commitsContainerRef = useRef<HTMLDivElement>(null);

  const branches: BranchName[] = [
    "mechanical-engineering",
    "acting",
    "writing",
  ];
  const [selectedBranch, setSelectedBranch] = useState<BranchName>(
    "mechanical-engineering"
  );

  // Scroll to top when branch changes
  useEffect(() => {
    if (commitsContainerRef.current) {
      commitsContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedBranch]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const commitsData: CommitsData = {
    "mechanical-engineering": [
      {
        date: "May 20, 2008",
        message:
          "feat: Started engineering degree hoping for computer engineering",
        author: "chin",
        hash: "cde123",
      },

      {
        date: "June 23, 2009",
        message: "GPA too low for computer engineering",
        author: "chin",
        hash: "d3v123",
      },
      {
        date: "July 10, 2009",
        message:
          "hotfix: Turns out gear wheels look cool. joined mechanical eng!",
        author: "chin",
        hash: "e4f567",
      },
      {
        date: "Aug 10, 2009",
        message: "wcfkwerjniw mwocmwo cwecw[",
        author: "chin",
        hash: "44v567",
      },
      {
        date: "Jan 10, 2010",
        message: "wkocnmom, j cweccwc",
        author: "chin",
        hash: "tfbfbf",
      },
      {
        date: "May 15, 2010",
        message: "First internship, at a gloves factory. Hands-on experience",
        author: "chin",
        hash: "g8h901",
      },
      {
        date: "May 20, 2011",
        message: "Next internship in a biscuits factory. got sick of biscuits",
        author: "chin",
        hash: "i2j345",
      },
      {
        date: "May 8, 2012",
        message: "Graduated. whaaat?",
        author: "chin",
        hash: "k6l789",
      },
      {
        date: "July 18, 2012",
        message: "First job at a garment factory. Specialized in bras.",
        author: "chin",
        hash: "m0n123",
      },
      {
        date: "Jan 18, 2013",
        message:
          "fail: Said I don't like the job during appraisal. Manager exploded.",
        author: "chin",
        hash: "m0n123",
      },
      {
        date: "May 20, 2013",
        message: "Switched to natural gas + healthcare. From bras to bars",
        author: "chin",
        hash: "p4q567",
      },
      {
        date: "Dec 03, 2015",
        message:
          "Installed 10+ liquid oxygen tanks islandwide. Super cool (-183°C)",
        author: "chin",
        hash: "r8s901",
      },
      {
        date: "Sep 03, 2018",
        message:
          "chore: Built internal software tools to fix problems we were tired of tolerating.",
        author: "chin",
        hash: "r8s901",
      },
      {
        date: "Sept 04, 2020",
        message: "refactor: Logged out of mechanical engineering for good.",
        author: "chin",
        hash: "t2u345",
      },
    ],
    acting: [
      {
        date: "Feb 10, 2000",
        message: "Dragged into a school play. Didn't see it coming.",
        author: "chin",
        hash: "v6w789",
      },
      {
        date: "Feb 11, 2001",
        message: "Decided acting might be my thing.",
        author: "chin",
        hash: "x0y123",
      },
      {
        date: "Dec 20, 2001",
        message: "Did a few plays in school..",
        author: "chin",
        hash: "z4a567",
      },
      {
        date: "Feb 15, 2002",
        message: "Joined a team for a competition. I was bad.",
        author: "chin",
        hash: "b8c901",
      },
      {
        date: "Feb 21, 2002",
        message: "Messed up lines in a sad scene. People laughed. Not ideal.",
        author: "chin",
        hash: "d2e345",
      },
      {
        date: "Feb 22, 2002",
        message:
          "Did it again. Maybe dead men and elephants are funny after all",
        author: "chin",
        hash: "f6g789",
      },
      {
        date: "Feb 25, 2002",
        message: "Almost got kicked out!.",
        author: "chin",
        hash: "h0i123",
      },
      {
        date: "Aug 15, 2006",
        message:
          "Street drama at a international book fair. No stage, just vibes (and road)",
        author: "chin",
        hash: "j4k567",
      },
      {
        date: "Sep 20, 2006",
        message:
          "Wanted to quit the street drama, it was embarrasing, even for me ",
        author: "chin",
        hash: "l8m901",
      },
      {
        date: "Sep 22, 2006",
        message: "Didn't quit. Ended up having fun and some BOOOOs",
        author: "chin",
        hash: "n2o345",
      },
      {
        date: "Dec 10, 2006",
        message: "Merged all street plays into one. Upgraded to actual stage!",
        author: "chin",
        hash: "p6q789",
      },
      {
        date: "Jan 15, 2007",
        message: "Was supposed to be paid. Still unpaid.",
        author: "chin",
        hash: "r0s123",
      },
      {
        date: "Sep 20, 2007",
        message: "apreased in a TV commercial. Might have aired. I don't know.",
        author: "chin",
        hash: "t4u567",
      },
      {
        date: "Apr 19, 2008",
        message: "Acted in a national-level play. Big stage!",
        author: "chin",
        hash: "v8w901",
      },
      {
        date: "Jun 10, 2008",
        message: "University debut on stage. Success!",
        author: "chin",
        hash: "x2y345",
      },
      {
        date: "Mar 24, 2009",
        message: "Drama at Peradeniya open air theatre. Got laughs",
        author: "chin",
        hash: "z6a789",
      },
      {
        date: "Mar 2, 2010",
        message: "Second Open air play. It rained before and during",
        author: "chin",
        hash: "zfa7y9",
      },
      {
        date: "Mar 20, 2011",
        message:
          "Took a bribe for giving a role to a friend, he finished my mechatronics project",
        author: "chin",
        hash: "b0c123",
      },
      {
        date: "May 20, 2012",
        message:
          "Wrote script with fake scenes featuring me and my crush. Bold!",
        author: "chin",
        hash: "d4e567",
      },
      {
        date: "Apr 27, 2012",
        message: "3rd Play was a hit! 2500 people showed up!",
        author: "chin",
        hash: "f8g901",
      },
      {
        date: "Apr 28, 2012",
        message:
          "Walked around the university for giving autographs. No one asked. It was the makeup, I know it!",
        author: "chin",
        hash: "eg971",
      },
      {
        date: "Feb 3, 2015",
        message: "Joined a drama workshop to become a star. Didn't work.",
        author: "chin",
        hash: "eg972",
      },
      {
        date: "Apr 28, 2024",
        message: "acting in Zoom meetings. Pretending to know stuff.",
        author: "chin",
        hash: "wjdbw",
      },
    ],
    writing: [
      {
        date: "Dec 21, 1998",
        message: "Collected every book I had. Count is 3.",
        author: "chin",
        hash: "h2i345",
      },
      {
        date: "Dec 21, 1998",
        message: "Decided I could write a better book",
        author: "chin",
        hash: "j6k789",
      },
      {
        date: "Dec 21, 1998",
        message: "Started writing. Turned out to be Enid Blyton remix.",
        author: "chin",
        hash: "l0m123",
      },
      {
        date: "Mar 21, 1999",
        message: "Another book. Still suspiciously Blyton.",
        author: "chin",
        hash: "n4o567",
      },
      {
        date: "Jul 4, 2000",
        message:
          "Finished book #3. like a bad copy of Sherlock Holmes this time.",
        author: "chin",
        hash: "p8q901",
      },
      {
        date: "Jul 24, 2000",
        message: "Sent it to a newspaper. No response.",
        author: "chin",
        hash: "r2s345",
      },
      {
        date: "Feb 05, 2001",
        message: "Sent more stories. Maybe to the wrong address?",
        author: "chin",
        hash: "t6u789",
      },
      {
        date: "Mar 15, 2001",
        message: "Entered a competition. Won a merit.",
        author: "chin",
        hash: "v0w123",
      },
      {
        date: "Apr 10, 2001",
        message: "Called a publisher. They laughed. I was just a child",
        author: "chin",
        hash: "x4y567",
      },
      {
        date: "May 15, 2011",
        message: "Started blogging on Blogspot — *aniwarathe* was born.",
        author: "chin",
        hash: "b2c345",
      },
      {
        date: "Jun 20, 2023",
        message: "Wrote a few screenplays. Never filmed. Still counts.",
        author: "chin",
        hash: "z8a901",
      },
      {
        date: "April 15, 2025",
        message: "Relaunched *aniwarathe.lk*. Real domain, real vibes.",
        author: "chin",
        hash: "b2c346",
      },
    ],
  };

  // Function to get commits for the selected branch
  const getCommits = (): Commit[] => {
    return (
      commitsData[selectedBranch]?.map((commit) => ({
        ...commit,
        branch: selectedBranch,
      })) || []
    );
  };

  return (
    <>
      <div className="mb-16 w-full mx-auto font-mono shadow-2xl rounded-lg overflow-hidden border border-border bg-surface-secondary">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-muted px-2 sm:px-4 py-2 border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-destructive"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-warning"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-success"></div>
            </div>
            <span className="text-secondary text-xs sm:text-sm ml-2 sm:ml-4">
              Terminal — chin@life-story
            </span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-surface-secondary text-success p-2 sm:p-4">
          {/* Command Line Header */}
          <div className="flex flex-col text-sm sm:text-base sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-info font-bold text-sm sm:text-base">
                ~/life-story
              </span>
              <span className="text-text-tertiary">(</span>
              <span className="text-warning">{selectedBranch}</span>
              <span className="text-text-tertiary">)</span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-surface-secondary text-success hover:bg-surface-tertiary border-border hover:border-success transition-all duration-200 text-sm"
                >
                  <GitBranch className="mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Switch
                  Branch
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-surface-secondary border-border w-[200px]">
                {branches.map((branch) => (
                  <DropdownMenuItem
                    key={branch}
                    onClick={() => setSelectedBranch(branch)}
                    className={`hover:bg-surface-tertiary cursor-pointer transition-colors text-sm ${
                      branch === selectedBranch
                        ? "bg-surface-tertiary text-warning"
                        : "text-text-secondary hover:text-foreground"
                    }`}
                  >
                    {branch}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Terminal Output */}
          <div className="bg-surface-secondary rounded border border-border overflow-hidden">
            <div
              ref={commitsContainerRef}
              className="p-2 sm:p-4 overflow-y-auto max-h-[60vh] sm:max-h-[70vh]"
            >
              {/* Command */}
              <div className="mb-4 flex items-center">
                <span className="text-success mr-2">$</span>
                <span className="text-success text-sm sm:text-base break-all">
                  git log --oneline --decorate {selectedBranch}
                </span>
              </div>

              {/* Git Log Output */}
              <div className="space-y-2 sm:space-y-3 commits-container">
                {getCommits().map((commit: Commit, index: number) => (
                  <div
                    key={index}
                    className="flex hover:bg-surface-tertiary/50 p-1.5 sm:p-2 rounded transition-colors"
                  >
                    <div className="text-warning mr-2 sm:mr-3 min-w-[7ch] sm:min-w-[8ch] font-bold text-xs sm:text-sm">
                      {commit.hash.substring(0, 7)}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground mb-0.5 sm:mb-1 text-md sm:text-base break-words">
                        {commit.message}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-text-tertiary gap-0.5 sm:gap-0">
                        <span>
                          Author:{" "}
                          <span className="text-info">{commit.author}</span>
                        </span>
                        <span className="hidden sm:inline mx-2">|</span>
                        <span>
                          Date:{" "}
                          <span className="text-text-secondary">
                            {commit.date}
                          </span>
                        </span>
                        {commit.branch && (
                          <>
                            <span className="hidden sm:inline mx-2">|</span>
                            <span className="text-warning">
                              ({commit.branch})
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Command Prompt */}
              <div className="mt-4 sm:mt-6 flex items-center">
                <span className="text-success mr-2">$</span>
                <span
                  className={`text-success ${
                    isBlinking ? "opacity-100" : "opacity-0"
                  } transition-opacity`}
                >
                  █
                </span>
              </div>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="mt-2 sm:mt-4 text-[10px] sm:text-xs text-text-tertiary flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
            <span>
              {getCommits().length} commits in {selectedBranch}
            </span>
          </div>
        </div>
      </div>
      {/* Footer Note outside the container */}
      <div className="mt-2  text-md text-wabi-earth italic">
        Apologies, non-tech folks. That thing above mimics something called Git
        log, where software developers document their mistakes and
        regrets when making software
      </div>
    </>
  );
}
