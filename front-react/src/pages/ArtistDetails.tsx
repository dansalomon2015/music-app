import { ModalLayout } from "components";
import { useParams, useNavigate } from "react-router-dom";

export const ArtistDetails = () => {
    const { artistId } = useParams();
    const navigate = useNavigate();

    const goBack_ = () => {
        navigate(-1);
    };

    return <ModalLayout artistId={artistId!} goBack={goBack_} />;
};
