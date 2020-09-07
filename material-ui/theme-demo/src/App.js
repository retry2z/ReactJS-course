import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import themeOrigin from './theme/theme';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

export default function RecipeReviewCard() {

  const [isDark, setDark] = useState(false);

  const themeHandler = () => {
    setDark(!isDark);
  }

  return (
    <ThemeProvider theme={themeOrigin(isDark)}>
      <Button color="secondary" variant="outlined" onClick={themeHandler}> Test </Button>
      <br />

      <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      </Card>
    </ThemeProvider >
  );
}
