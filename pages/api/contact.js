import axios from "axios";

const handler = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const between = (x, min, max) => {
    return x >= min && x <= max;
  };

  if (!name) return res.redirect("/contact?s=1");
  if (!email) return res.redirect("/contact?s=2");
  if (!subject) return res.redirect("/contact?s=3");
  if (!message) return res.redirect("/contact?s=4");
  if (!between(name.length, 1, 256)) return res.redirect("/contact?s=5");
  if (!between(email.length, 1, 256)) return res.redirect("/contact?s=6");
  if (!between(subject.length, 1, 256)) return res.redirect("/contact?s=7");
  if (!between(message.length, 1, 4096)) return res.redirect("/contact?s=8");

  const embeds = [
    {
      title: subject,
      description: message,
      fields: [
        {
          name: "Name",
          value: name,
        },
        {
          name: "Email",
          value: email,
        },
      ],
    },
  ];

  const config = {
    method: "POST",
    url: process.env.CONTACT_DISCORD_WH,
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ embeds }),
  };

  try {
    await axios(config);
  } catch (err) {
    return res.redirect("/contact?s=9");
  }

  res.status(200).redirect("/contact?s=0");
};

export default handler;
