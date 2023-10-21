export const createPrediction = async (req, res) => {
  const { message } = req.body;
  console.log(message);

  try {
    // Call the Flowise API endpoint here..
    const flowiseData = {
      question: message,
    };

    // Call the Flowise Endpoint Here
    const response = await fetch(
      `${process.env.FLOWISE_URL}/api/v1/prediction/${process.env.FLOW_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLOWISE_API_KEY}`,
        },
        body: JSON.stringify(flowiseData),
      }
    );

    const data = await response.json();
    console.log(data);

    res.status(200).json({ message: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
