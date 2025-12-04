// import * as cdk from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
// import * as NodeHangupSdk from '../lib/node-hangup-sdk-stack';


import { MetadataService } from "@aws-sdk/ec2-metadata-service";

test('Should not hang up', async () => {
  try {
    const metadataService = new MetadataService({
      httpOptions: {
        timeout: 1000,
      },
    });
    await metadataService.fetchMetadataToken();
  } catch (error) {
    // Not really interested in errors here
  }

  console.log('handles:', (process as any)._getActiveHandles());
})