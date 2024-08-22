const express = require('express');
const app = express();
const cors = require('cors');
const mentorRoutes = require('./routes/mentorRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', mentorRoutes);
app.use('/api', sessionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/',(req,res)=>{
    res.send("server is running");
})