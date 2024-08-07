import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      avatar: "url-to-jenny-avatar",
      rating: 5,
      feedback:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    },
    {
      name: "Dianne Russell",
      avatar: "url-to-dianne-avatar",
      rating: 4,
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    },
    {
      name: "Devon Lane",
      avatar: "url-to-devon-avatar",
      rating: 4,
      feedback:
        "Normally wings are wings, but theirs are lean meaty and tender.",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer's Feedback</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 max-h-96 overflow-auto">
        {feedbacks.map((feedback, index) => (
          <div key={index}>
            <div className="flex items-center mb-4 gap-2">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src={feedback.avatar} alt="Avatar" />
                <AvatarFallback>{feedback.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{feedback.name}</h3>
                <div className="flex">
                  {Array(feedback.rating)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.359 4.193a1 1 0 00.95.69h4.396c.969 0 1.372 1.24.588 1.81l-3.557 2.576a1 1 0 00-.364 1.118l1.359 4.193c.3.921-.755 1.688-1.54 1.118l-3.557-2.576a1 1 0 00-1.175 0l-3.557 2.576c-.784.57-1.84-.197-1.54-1.118l1.359-4.193a1 1 0 00-.364-1.118L2.956 9.62c-.784-.57-.381-1.81.588-1.81h4.396a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                    ))}
                </div>
              </div>
            </div>
            <p>{feedback.feedback}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CustomerFeedback;
