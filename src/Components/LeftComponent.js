import React from 'react';
import { Grid, Box } from '@mui/material';
import Data from '../DataArray';

const LeftComponent = ({ onItemClick }) => {
	return (
		<>
			<Grid item lg={2}>
				<Box>
					<Box
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							border: '2px solid grey',
							padding: '10px',
							cursor: 'pointer',
						}}>
						<Box style={{ fontSize: '22px' }}>List Of Items</Box>
						<Box>
							<i class='fa-solid fa-caret-down'></i>
						</Box>
					</Box>
					{Data.map((item, i) => {
						return (
							<Box
								mt={1}
								key={i}
								onClick={() => onItemClick(item)}
								style={{
									padding: '4px',
									border: '2px solid grey',
									cursor: 'pointer',
								}}>
								<Box style={{ fontSize: '20px' }}>{item.Name}</Box>
							</Box>
						);
					})}
				</Box>
			</Grid>
		</>
	);
};

export default LeftComponent;
