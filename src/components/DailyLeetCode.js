import React, { useState, useEffect } from "react";
import { RefreshCcw } from "lucide-react";
import { LeetCodeData } from "../utils/LeetCodeData";

const questionsData = LeetCodeData;

function getRandomQuestions() {
    return questionsData.sort(() => 0.5 - Math.random()).slice(0, 3);
}

export default function LeetCodeSelector() {
    const [questions, setQuestions] = useState(getRandomQuestions());

    const refreshQuestions = () => setQuestions(getRandomQuestions());

    useEffect(() => {
        const today = new Date().toDateString();
        const storedDate = localStorage.getItem("leetcode-date");
        if (today !== storedDate) {
            localStorage.setItem("leetcode-date", today);
            refreshQuestions();
        }
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full space-y-4">
                <h2 className="text-2xl font-semibold mb-4">LeetCode Daily Questions</h2>
                {/* {questions.map((question, index) => ( */}
                    <table className="leetcode-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Difficulty</th>
                                <th>Submitted Count</th>
                                <th>Tags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question) => (
                                <tr key={question.id}>
                                    <td>
                                        <a
                                            href={`https://leetcode.com/problems/${question.titleSlug}/description/`}
                                            className="text-blue-500 hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {question.title}
                                        </a>
                                    </td>
                                    <td>{question.difficulty}</td>
                                    <td>{question.numSubmitted}</td>
                                    <td>
                                        {question.topicTags.map((tag, index) => (
                                            <span key={index} className="tag-chip">
                                                {tag.name}
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                <button
                    onClick={refreshQuestions}
                    className="w-full mt-4  m-auto flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md max-w-sm hover:bg-blue-600 transition"
                >
                    <RefreshCcw className="mr-2" /> Refresh
                </button>
            </div>
        </div>
    );
}

{/* <div key={index} className="flex justify-between items-center mb-2">
<span>{question.title}</span>
<div className="space-x-2">
  <a
    href={`https://leetcode.com/problems/${question.titleSlug}/description/`}
    target="_blank"
    className="text-blue-500 hover:underline"
    rel="noopener noreferrer"
  >
    Question
  </a>
  <a
    href={`https://leetcode.com/submissions/detail/${question.id}/`}
    target="_blank"
    className="text-green-500 hover:underline"
    rel="noopener noreferrer"
  >
    Solution
  </a>
</div>
</div> */}
