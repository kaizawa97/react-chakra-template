import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Box, ButtonGroup, Button
} from "@chakra-ui/react";

export const Home = () => {

    return (
        <div>
            <Box>
                <ButtonGroup spacing={4}>
                    <Button as={Link} to="/signin">
                        Sign in
                    </Button>
                    <Button as={Link} to="/signup">
                        Sign up
                    </Button>
                </ButtonGroup>
            </Box>
        </div>
    )
};