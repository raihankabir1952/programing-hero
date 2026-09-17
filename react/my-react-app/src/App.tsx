// ১. প্রথমে প্রপস-এর ডাটা টাইপ (Interface) বলে দিতে হবে
interface StudentProps {
  name: string;
  role: number;
}

// ২. ফাংশনের ভেতর props পাস করা হলো
function StudentInfo(props: StudentProps) {
  return (
    <div className="student-info">
      <h2 className="student-name">শিক্ষার্থীর নাম: {props.name}</h2>
      <p>রোল নম্বর: {props.role}</p>
    </div>
  )
}

// ৩. প্রধান ফাংশন (App)
function App() {
  return (
    <div>
      <h1>আমাদের ক্লাসের শিক্ষার্থী তালিকা</h1>
      <p>নিচে props ব্যবহার করে আলাদা আলাদা ডাটা পাঠানো হয়েছে:</p>
      
      {/* এখানে props এর মাধ্যমে ভিন্ন ভিন্ন নাম ও রোল পাঠানো হচ্ছে */}
      <StudentInfo name="সাকিব হাসান" role={101} />
      <StudentInfo name="রাফি আহমেদ" role={102} />
      <StudentInfo name="আফরোজা সুলতানা" role={103} />
    </div>
  )
}

export default App
