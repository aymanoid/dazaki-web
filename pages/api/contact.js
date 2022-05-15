import axios from "axios";

const handler = async (req, res) => {
  const body = req.body;

  const between = (x, min, max) => {
    return x >= min && x <= max;
  };

  if (!body.name) return res.redirect("/contact?status=1");
  if (!body.email) return res.redirect("/contact?status=2");
  if (!body.subject) return res.redirect("/contact?status=3");
  if (!body.message) return res.redirect("/contact?status=4");
  if (!between(body.name.length, 1, 256))
    return res.redirect("/contact?status=5");
  if (!between(body.email.length, 1, 256))
    return res.redirect("/contact?status=6");
  if (!between(body.subject.length, 1, 256))
    return res.redirect("/contact?status=7");
  if (!between(body.message.length, 1, 4096))
    return res.redirect("/contact?status=8");

  const embeds = [
    {
      title: body.subject,
      description: body.message,
      fields: [
        {
          name: "Name",
          value: body.name,
        },
        {
          name: "Email",
          value: body.email,
        },
      ],
    },
    {
      title: "User Info",
      fields: [
        {
          name: "IP Address",
          value: req.ip || "empty",
        },
        {
          name: "User Agent",
          value: req.ua || "empty",
        },
        {
          name: "Geo Location",
          value: req.geo || "empty",
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
    return res.redirect("/contact?status=9");
  }

  return res.redirect("/contact?status=0");
};

export default handler;
