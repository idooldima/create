import { Button, Card, CardActions, CardContent, Typography, Container } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../store/modals/actions';

export default function ListItemCard() {
  const dispatch = useDispatch();
  const onOpenModal = () => {
    dispatch(openModal('editList'));
  };
  const onDeleteModal = () => {
    dispatch(openModal('deleteList'))
  }
  return (
    <div className="list-card">
      <div className="list-item">
        <Card sx={{ minWidth: 420 }}>
          <CardContent sx={{ paddingBottom: 'inherit' }}>
            <div className="list-btn">
              <Typography variant="h4" component="div">
                Monday
              </Typography>
              <div className="list-div">
                <button className="nav-btn">
                  <FavoriteIcon />
                </button>
                <button onClick={onOpenModal} className="nav-btn">
                  <BorderColorIcon />
                </button>
                <button onClick={onDeleteModal} className="nav-btn">
                  <ClearIcon />
                </button>
              </div>
            </div>
            <Container
              maxWidth="xs"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'unset',
                padding: 'unset',
              }}
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography sx={{ textAlign: 'end', fontSize: 12 }} color="text.secondary">
                1223431235312
              </Typography>
            </Container>
            <div className="list-task-btn text-align-center">
              <Button>
                <KeyboardArrowDownIcon />
              </Button>
            </div>
          </CardContent>
          <div className="text-align-center list-share-btn">
            <Button size="small" fullWidth={true}>
              Share
            </Button>
          </div>
        </Card>
      </div>
      <div className="list-item">
        <Card sx={{ minWidth: 420 }}>
          <CardContent sx={{ paddingBottom: 'inherit' }}>
            <div className="list-btn">
              <Typography variant="h4" component="div">
                Monday
              </Typography>
              <div className="list-div">
                <button className="nav-btn">
                  <FavoriteIcon />
                </button>
                <button onClick={onOpenModal} className="nav-btn">
                  <BorderColorIcon />
                </button>
                <button onClick={onDeleteModal} className="nav-btn">
                  <ClearIcon />
                </button>
              </div>
            </div>
            <Container
              maxWidth="xs"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'unset',
                padding: 'unset',
              }}
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography sx={{ textAlign: 'end', fontSize: 12 }} color="text.secondary">
                1223431235312
              </Typography>
            </Container>
            <div className="list-task-btn text-align-center">
              <Button>
                <KeyboardArrowDownIcon />
              </Button>
            </div>
          </CardContent>
          <div className="text-align-center list-share-btn">
            <Button size="small" fullWidth={true}>
              Share
            </Button>
          </div>
        </Card>
      </div>
      <div className="list-item">
        <Card sx={{ minWidth: 420 }}>
          <CardContent sx={{ paddingBottom: 'inherit' }}>
            <div className="list-btn">
              <Typography variant="h4" component="div">
                Monday
              </Typography>
              <div className="list-div">
                <button className="nav-btn">
                  <FavoriteIcon />
                </button>
                <button onClick={onOpenModal} className="nav-btn">
                  <BorderColorIcon />
                </button>
                <button onClick={onDeleteModal} className="nav-btn">
                  <ClearIcon />
                </button>
              </div>
            </div>
            <Container
              maxWidth="xs"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'unset',
                padding: 'unset',
              }}
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography sx={{ textAlign: 'end', fontSize: 12 }} color="text.secondary">
                1223431235312
              </Typography>
            </Container>
            <div className="list-task-btn text-align-center">
              <Button>
                <KeyboardArrowDownIcon />
              </Button>
            </div>
          </CardContent>
          <div className="text-align-center list-share-btn">
            <Button size="small" fullWidth={true}>
              Share
            </Button>
          </div>
        </Card>
      </div>
      <div className="list-item">
        <Card sx={{ minWidth: 420 }}>
          <CardContent sx={{ paddingBottom: 'inherit' }}>
            <div className="list-btn">
              <Typography variant="h4" component="div">
                Monday
              </Typography>
              <div className="list-div">
                <button className="nav-btn">
                  <FavoriteIcon />
                </button>
                <button onClick={onOpenModal} className="nav-btn">
                  <BorderColorIcon />
                </button>
                <button onClick={onDeleteModal} className="nav-btn">
                  <ClearIcon />
                </button>
              </div>
            </div>
            <Container
              maxWidth="xs"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'unset',
                padding: 'unset',
              }}
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography sx={{ textAlign: 'end', fontSize: 12 }} color="text.secondary">
                1223431235312
              </Typography>
            </Container>
            <div className="list-task-btn text-align-center">
              <Button>
                <KeyboardArrowDownIcon />
              </Button>
            </div>
          </CardContent>
          <div className="text-align-center list-share-btn">
            <Button size="small" fullWidth={true}>
              Share
            </Button>
          </div>
        </Card>
      </div>
      <div className="list-item">
        <Card sx={{ minWidth: 420 }}>
          <CardContent sx={{ paddingBottom: 'inherit' }}>
            <div className="list-btn">
              <Typography variant="h4" component="div">
                Monday
              </Typography>
              <div className="list-div">
                <button className="nav-btn">
                  <FavoriteIcon />
                </button>
                <button onClick={onOpenModal} className="nav-btn">
                  <BorderColorIcon />
                </button>
                <button onClick={onDeleteModal} className="nav-btn">
                  <ClearIcon />
                </button>
              </div>
            </div>
            <Container
              maxWidth="xs"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'unset',
                padding: 'unset',
              }}
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography sx={{ textAlign: 'end', fontSize: 12 }} color="text.secondary">
                1223431235312
              </Typography>
            </Container>
            <div className="list-task-btn text-align-center">
              <Button>
                <KeyboardArrowDownIcon />
              </Button>
            </div>
          </CardContent>
          <div className="text-align-center list-share-btn">
            <Button size="small" fullWidth={true}>
              Share
            </Button>
          </div>
        </Card>
      </div>
      <div className="list-item">
        <Card sx={{ minWidth: 420 }}>
          <CardContent sx={{ paddingBottom: 'inherit' }}>
            <div className="list-btn">
              <Typography variant="h4" component="div">
                Monday
              </Typography>
              <div className="list-div">
                <button className="nav-btn">
                  <FavoriteIcon />
                </button>
                <button onClick={onOpenModal} className="nav-btn">
                  <BorderColorIcon />
                </button>
                <button onClick={onDeleteModal} className="nav-btn">
                  <ClearIcon />
                </button>
              </div>
            </div>
            <Container
              maxWidth="xs"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'unset',
                padding: 'unset',
              }}
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography sx={{ textAlign: 'end', fontSize: 12 }} color="text.secondary">
                1223431235312
              </Typography>
            </Container>
            <div className="list-task-btn text-align-center">
              <Button>
                <KeyboardArrowDownIcon />
              </Button>
            </div>
          </CardContent>
          <div className="text-align-center list-share-btn">
            <Button size="small" fullWidth={true}>
              Share
            </Button>
          </div>
        </Card>
      </div>

    </div>
  );
}
