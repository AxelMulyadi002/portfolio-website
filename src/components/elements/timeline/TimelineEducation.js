import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Experience from '../experiencePage/Experience';
import { School } from '@mui/icons-material';

export default function TimelineEducation() {
	return (
		<div className="lg:max-w-[90%] lg:m-auto lg:mt-40">
			<div className="flex flex-col">
				<div className="m-auto lg:min-w-[90%]">
					<h2 className="text-2xl font-bold lg:text-4xl m-auto lg:m-0 ">
						Background Education
					</h2>
					<div className="min-w-[90%] mt-3 h-0.5 bg-white"></div>
				</div>
				<Timeline position="alternate" className="mt-4">
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: 'auto 0' }}
							align="right"
							variant="body2"
							color="text.secondary"
						></TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector />
							<TimelineDot color="success">
								<School />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: '12px', px: 2 }}>
							<Typography variant="h6" component="span">
								Universitas Bunda Mulia
							</Typography>
							<Typography>Ilmu Komunikasi</Typography>
							<Typography>IPK : 3.51</Typography>
							<Typography>2021 - Now</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineConnector />
							<TimelineDot color="primary">
								<LaptopMacIcon />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: '12px', px: 2 }}>
							<Typography variant="h6" component="span">
								SMK Bonavita
							</Typography>
							<Typography>Multimedia</Typography>
							<Typography>2019 - 2021</Typography>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</div>
			<div className="mt-4">
				<Experience />
			</div>
		</div>
	);
}
