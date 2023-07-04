import { Grid, Box } from '@mui/material';
import React, { useState } from 'react';

const Data = [
	{ id: 1, Name: 'Shirt 1', Price: 100 },
	{ id: 2, Name: 'Shirt 2', Price: 120 },
	{ id: 3, Name: 'Shirt 3', Price: 150 },
	{ id: 4, Name: 'Shirt 4', Price: 160 },
	{ id: 5, Name: 'Shirt 5', Price: 170 },
	{ id: 6, Name: 'Shirt 6', Price: 180 },
	{ id: 7, Name: 'Trouser 1', Price: 170 },
	{ id: 8, Name: 'Trouser 2', Price: 190 },
	{ id: 9, Name: 'Trouser 3', Price: 200 },
	{ id: 10, Name: 'Trouser 4', Price: 270 },
];

const App = () => {
	const [data, setData] = useState([]);
	console.log('data', data.Name);
	return (
		<>
			<Grid style={{ padding: '80px' }} container>
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
									onClick={() => setData(item)}
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
				<Grid item lg={7}>
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
							{data.Name}
						</Box>
						<Box
							mt={1}
							style={{ fontSize: '20px', fontWeight: '500', color: '#5C5C5C' }}>
							price: Rs.{data.Price}
						</Box>
						<Box
							mt={5}
							style={{ fontSize: '30px', fontWeight: '500', color: '#454545' }}>
							Item ID: {data.id}
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default App;
