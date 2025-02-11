import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({ message, senderId, receiverId });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    //await takes time to wait
    // await conversation.save();
    // await newMessage.save()

    // will run in parallel

    await Promise.all([conversation.save(), newMessage.save()]);
    // SOCKET fucntionality
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    return res.status(201).json(newMessage);
  } catch (err) {
    console.log("error in sendMessage function ");
    return res.status(500).json({ message: err.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params; // user's _id
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChatId],
      },
    }).populate("messages"); // actual messages

    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (err) {
    console.log("error in getMessages function ");
    return res.status(500).json({ message: err.message });
  }
};
export { sendMessage, getMessages };
