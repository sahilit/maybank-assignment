"use client";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { connect } from "react-redux";

const SearchHistory: React.FC<{ searchHistory: string[] }> = ({
  searchHistory,
}) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Search History
      </Typography>
      {searchHistory.length > 0 ? (
        <List
          style={{
            maxHeight: 385,
            overflow: "auto",
            border: "1px solid #ccc",
            padding: 0,
          }}
        >
          {searchHistory.map((data, index) => (
            <ListItem key={index} style={{ borderBottom: "1px solid #ccc" }}>
              <ListItemText primary={data} style={{ color: "#777" }} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" gutterBottom>
          No search history found
        </Typography>
      )}
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return { searchHistory: state.getMapDetails.searchHistory };
};

export default connect(mapStateToProps)(SearchHistory);
