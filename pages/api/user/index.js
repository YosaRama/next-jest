import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get((req, res) => {
  const data = [
    { id: 1, name: "Yosa" },
    { id: 2, name: "Rama" },
    { id: 3, name: "Dinata" },
  ];

  const status = true;

  try {
    if (status) {
      res
        .status(200)
        .json({ success: true, message: "Success Get Data", data: data });
    } else {
      res
        .status(200)
        .json({ success: false, message: "Something Wrong!", data: data });
    }
  } catch (error) {
    res
      .status(200)
      .json({ success: false, message: error.message, data: data });
  }
});

apiHandler.post((req, res) => {
  const { name, email } = req.body;
  try {
    if (!email.includes("@")) {
      res.status(200).json({
        success: false,
        message: "Please input right email!",
        data: { name, email },
      });
    }
    res.status(200).json({
      success: true,
      message: "Success Post Data",
      data: { name, email },
    });
  } catch (error) {
    res
      .status(200)
      .json({ success: false, message: error.message, data: { name, email } });
  }
});

export default apiHandler;
