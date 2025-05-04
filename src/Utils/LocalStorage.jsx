import React from "react";

const employeesData = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Update client records",
        description: "Revise and update contact details in the CRM.",
        date: "2025-04-15",
        category: "Data Entry",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix login bug",
        description: "Resolve login issue reported by QA team.",
        date: "2025-04-14",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Email follow-up",
        description: "Send follow-up emails to pending clients.",
        date: "2025-04-13",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design meeting",
        description: "Attend UI/UX sync-up meeting.",
        date: "2025-04-15",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test checkout flow",
        description: "Manually test the shopping cart and checkout.",
        date: "2025-04-13",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Write documentation",
        description: "Prepare API documentation for developers.",
        date: "2025-04-15",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update pricing page",
        description: "Revamp pricing layout as per new design.",
        date: "2025-04-14",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Bug review",
        description: "Review reported issues and assign priorities.",
        date: "2025-04-12",
        category: "Review",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Clean repo",
        description: "Remove unused files and branches from GitHub.",
        date: "2025-04-10",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Client call",
        description: "Discuss new feature requirements.",
        date: "2025-04-15",
        category: "Client Interaction",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Deploy update",
        description: "Push latest code to production server.",
        date: "2025-04-13",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Backup DB",
        description: "Take a full backup of database.",
        date: "2025-04-11",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "SEO audit",
        description: "Run SEO audit and report issues.",
        date: "2025-04-15",
        category: "SEO",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Blog post",
        description: "Write blog on performance optimization.",
        date: "2025-04-14",
        category: "Content",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Fix mobile view",
        description: "Resolve layout issues on mobile devices.",
        date: "2025-04-13",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Analytics check",
        description: "Verify Google Analytics setup.",
        date: "2025-04-12",
        category: "Tracking",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const adminData = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employeesData));
  localStorage.setItem("admin", JSON.stringify(adminData)); 
};

export const GetLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
  

};
