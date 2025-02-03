import {
  CloudWatchLogsClient,
  PutLogEventsCommand,
} from '@aws-sdk/client-cloudwatch-logs';
const cloudwatch = new CloudWatchLogsClient({ region: 'us-east-1' });

export const awsLogger = async (message: any, level: string) => {
  try {
    const timestamp = new Date().getTime();
    const params = new PutLogEventsCommand({
      logEvents: [
        {
          timestamp,
          message: JSON.stringify({ level, message, timestamp }),
        },
      ],
      logGroupName: 'NLPipe',
      logStreamName: 'info',
    });

    await cloudwatch.send(params);
  } catch (error) {
    console.log(error);
  }
};
