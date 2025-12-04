import { MetadataService } from "../lib";

test('Should not hang up', async () => {
  try {
    const metadataService = new MetadataService({
      httpOptions: {
        timeout: 1000,
      },
      socketTimeout: 800,
    });
    await metadataService.fetchMetadataToken();
  } catch (error) {
    // Not really interested in errors here
  }

  console.log('handles:', (process as any)._getActiveHandles());
}, 10_000);
