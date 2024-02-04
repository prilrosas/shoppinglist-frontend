import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Fab,
  List,
  Paper,
  Typography,
} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import RestoreIcon from "@mui/icons-material/Restore";
import { Link } from "react-router-dom";

function ShoppingList() {
  return (
    // <div>
    //   <h1>Lista de compras</h1>
    //   <Link to="./listItens">Itens</Link> {"  "}
    // </div>

    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Card sx={{ minWidth: "100px", margin: 2 }}>
        <CardContent component={Link} to="./listItens">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Lista de compras
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: "100px", margin: 2 }}>
        <CardContent component={Link} to="./listItens">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Lista de compras
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: "100px", margin: 2 }}>
        <CardContent component={Link} to="./listItens">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Lista de compras
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: "100px", margin: 2 }}>
        <CardContent component={Link} to="./listItens">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Lista de compras
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: "100px", margin: 2 }}>
        <CardContent component={Link} to="./listItens">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Lista de compras
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: "100px", margin: 2 }}>
        <CardContent component={Link} to="./listItens">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Lista de compras
          </Typography>
        </CardContent>
      </Card>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <Button variant="contained" component={Link} to="./listItens">
          Nova Lista
        </Button>
      </Paper>
    </Box>
  );
}

export default ShoppingList;
