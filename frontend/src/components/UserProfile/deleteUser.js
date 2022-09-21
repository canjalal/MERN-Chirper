import { useDispatch, useSelector } from "react-redux";
import {deleteUser} from "../../store/session";


const DeleteUser = () => {
    const userId = useSelector(state => state.session.user._id)
    const dispatch = useDispatch();

    const closeModal = () => {
        let ele = document.getElementById("delete-user-modal");
        ele.style.display = "none";
        let bg = document.getElementById("user-modal-background");
        bg.style.display = "none";
    }

    return (
        <>
            <div id="close-delete-modal" className="fa-solid fa-x" onClick={closeModal}></div>
            <h1 className="delete-modal">Are you sure you want to delete user?</h1>
            <div className="delete-button" onClick={() => dispatch(deleteUser(userId))}>Delete User</div>
            <div className="no-delete-button" onClick={closeModal}>Cancel</div>
        </>
    )
}

export default DeleteUser;