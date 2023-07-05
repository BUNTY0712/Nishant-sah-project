import React from 'react';
import { Grid, Box } from '@mui/material';

const RightComponent = ({ selectedItem }) => {
	console.log('select', selectedItem);
	return (
		<>
			<Grid item lg={7}>
				{selectedItem ? (
					<Box>
						<Box
							style={{
								textAlign: 'center',
								fontSize: '85px',
								fontWeight: '400',
								color: '#8A8A8A',
							}}>
							Card
						</Box>
						<Box
							style={{
								textAlign: 'center',
								border: '3px solid #8A8A8A',
								marginLeft: '10rem',
								marginRight: '10rem',
								padding: '20px 0px 80px 0px',
							}}>
							<Box
								style={{
									textAlign: 'center',
									fontSize: '40px',
									fontWeight: '500',
									color: '#454545',
								}}>
								{selectedItem.Name}
							</Box>
							<Box
								mt={1}
								style={{
									fontSize: '20px',
									fontWeight: '500',
									color: '#5C5C5C',
								}}>
								price: Rs.{selectedItem.Price}
							</Box>
							<Box
								mt={5}
								style={{
									fontSize: '30px',
									fontWeight: '500',
									color: '#454545',
								}}>
								Item ID: {selectedItem.id}
							</Box>
						</Box>
					</Box>
				) : (
					<Box>
						<Box
							style={{
								textAlign: 'center',
								fontSize: '85px',
								fontWeight: '400',
								color: '#8A8A8A',
							}}>
							Card
						</Box>
						<Box
							style={{
								textAlign: 'center',
								border: '3px solid #8A8A8A',
								marginLeft: '10rem',
								marginRight: '10rem',
								padding: '20px 0px 80px 0px',
							}}>
							<Box
								style={{
									textAlign: 'center',
									fontSize: '40px',
									fontWeight: '500',
									color: '#454545',
								}}>
								No selected
							</Box>
							<Box
								mt={1}
								style={{
									fontSize: '20px',
									fontWeight: '500',
									color: '#5C5C5C',
								}}>
								price: Rs. No selected
							</Box>
							<Box
								mt={5}
								style={{
									fontSize: '30px',
									fontWeight: '500',
									color: '#454545',
								}}>
								Item ID: No selected
							</Box>
						</Box>
					</Box>
				)}
			</Grid>
		</>
	);
};

export default RightComponent;
