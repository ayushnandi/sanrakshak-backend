import  mongoose  from 'mongoose';
const  schema = new mongoose.schema({
    case: {
        type: mongoose.schema.Types.ObjectID,
        ref:'Case'
    },
    details:{
        type: String,
        default: none,
        required: true,
    },
    person:{
        type: mongoose.schema.Types.ObjectID,
        ref:'Person'
    },
    date:{
        type: mongoose.schema.Types.ObjectID,
        ref: 'Date'
    },
    assignedBy:{
        type: mongoose.schema.Types.ObjectID,
        ref: 'Assigned by'
    },
    stage:{
        type: mongoose.schema.Types.ObjectID,
        ref: 'Stage'
    },
    completed:{
        type: Boolean,
        required : true,
        default : 0, 
    }
});

const User = mongoose.model("Task", schema);

export default User;