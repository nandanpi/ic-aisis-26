export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  iconName: "FileText" | "Clock" | "CheckCircle" | "Users" | "Award";
  status: "completed" | "upcoming";
  color: "blue" | "red" | "purple" | "orange" | "green";
  isHardDeadline?: boolean;
  highlight?: boolean;
  oldDates?: string[];
}

export interface ImportantDate {
  date: string;
  event: string;
  oldDates?: string[];
  isHardDeadline?: boolean;
}

export const timelineEvents2026: TimelineEvent[] = [
  {
    date: "December 03, 2025",
    title: "Call for Papers Opens",
    description: "Submission portal opens for research papers and abstracts",
    iconName: "FileText",
    status: "completed",
    color: "blue",
  },
  {
    date: "8 January 2026",
    oldDates: ["20 December 2025", "25 December 2025", "03 January 2026"],
    title: "Paper Submission Deadline",
    description: "Final deadline for submitting research papers and abstracts",
    iconName: "Clock",
    status: "upcoming",
    color: "red",
    isHardDeadline: true,
  },
  {
    date: "12 January 2026",
    oldDates: ["25 December 2025", "30 December 2025", "06 January 2026", "10 January 2026"],
    title: "Notification of Acceptance",
    description: "Authors will be notified about paper acceptance status",
    iconName: "CheckCircle",
    status: "upcoming",
    color: "purple",
  },
  {
    date: "15 January 2026",
    oldDates: ["31 December 2025", "05 January 2026", "8 January 2026", "12 January 2026"],
    title: "Early Bird Registration",
    description: "Final deadline for early bird conference registration and payment",
    iconName: "Users",
    status: "upcoming",
    color: "orange",
  },
  {
    date: "16 January 2026",
    oldDates: ["05 January 2026", "10 January 2026", "13 January 2026"],
    title: "Regular Registration",
    description: "Final deadline for regular conference registration and payment",
    iconName: "Users",
    status: "upcoming",
    color: "blue",
  },
  {
    date: "24 January 2026",
    title: "Conference Date",
    description: "One day international conference with keynotes and presentations",
    iconName: "Award",
    status: "upcoming",
    color: "red",
    highlight: true,
  },
];

export const timelineEvents2027: TimelineEvent[] = [
  {
    date: "01 September 2026",
    title: "Paper Submission System Opens",
    description: "Submission portal opens for research papers and abstracts",
    iconName: "FileText",
    status: "upcoming",
    color: "blue",
  },
  {
    date: "15 January 2027",
    title: "Full Paper Submission Deadline",
    description: "Final deadline for submitting full research papers",
    iconName: "Clock",
    status: "upcoming",
    color: "red",
  },
  {
    date: "31 January 2027",
    title: "Extended Submission Deadline (if applicable)",
    description: "Extended deadline for late submissions of research papers",
    iconName: "Clock",
    status: "upcoming",
    color: "orange",
  },
  {
    date: "05 February 2027",
    title: "Notification of Acceptance",
    description: "Authors will be notified about paper acceptance status",
    iconName: "CheckCircle",
    status: "upcoming",
    color: "purple",
  },
  {
    date: "20 February 2027",
    title: "Camera-Ready Paper Submission",
    description: "Deadline for submitting final camera-ready manuscripts",
    iconName: "FileText",
    status: "upcoming",
    color: "blue",
  },
  {
    date: "20 February 2027",
    title: "Author Registration Deadline",
    description: "Deadline for presenting authors to register for the conference",
    iconName: "Users",
    status: "upcoming",
    color: "orange",
  },
  {
    date: "20 February 2027",
    title: "Early Bird Registration Ends",
    description: "Deadline for early bird conference registration discount",
    iconName: "Users",
    status: "upcoming",
    color: "green",
  },
  {
    date: "25 February 2027",
    title: "Presentation Schedule Announcement",
    description: "Release of the presentation schedules for accepted papers",
    iconName: "Clock",
    status: "upcoming",
    color: "purple",
  },
  {
    date: "01 March 2027",
    title: "Final Conference Program Release",
    description: "Detailed program schedule announcement",
    iconName: "FileText",
    status: "upcoming",
    color: "blue",
  },
  {
    date: "08–09 March 2027",
    title: "Conference Dates",
    description: "Two-day international conference (IC-AISIS 2027)",
    iconName: "Award",
    status: "upcoming",
    color: "red",
    highlight: true,
  },
  {
    date: "Post-Conference",
    title: "Proceedings Submission",
    description: "As per publishing partner workflow after the conference",
    iconName: "CheckCircle",
    status: "upcoming",
    color: "green",
  },
];

export const importantDates2026: ImportantDate[] = [
  {
    date: "8 January 2026",
    oldDates: ["20 December 2025", "25 December 2025", "03 January 2026"],
    event: "Paper Submission Deadline",
    isHardDeadline: true,
  },
  {
    date: "12 January 2026",
    oldDates: ["25 December 2025", "30 December 2025", "06 January 2026", "10 January 2026"],
    event: "Notification of Acceptance",
  },
  {
    date: "15 January 2026",
    oldDates: ["31 December 2025", "05 January 2026", "8 January 2026", "12 January 2026"],
    event: "Early Bird Registration",
  },
  {
    date: "16 January 2026",
    oldDates: ["05 January 2026", "10 January 2026", "13 January 2026"],
    event: "Regular Registration",
  },
  {
    date: "24 January 2026",
    event: "Conference Date",
  },
];

export const importantDates2027: ImportantDate[] = [
  {
    date: "15 January 2027",
    event: "Paper Submission Deadline",
  },
  {
    date: "05 February 2027",
    event: "Notification of Acceptance",
  },
  {
    date: "20 February 2027",
    event: "Registration Deadline",
  },
  {
    date: "08–09 March 2027",
    event: "Conference Dates",
  },
];
