// Copyright 2021 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * A simple Extension written in plain javascript that connects to the Looker API using the Extension Framework's built in authentication
 * and returns the currently logged in user's name.
 * Note: We recommend that you use the Extension Framework with react for full support of components, and all the convenience of the extension-sdk's
 * react bindings.
 */

import {
  connectExtensionHost,
  LookerExtensionSDK40,
} from "@looker/extension-sdk";

(async () => {
  const extensionSdk = await connectExtensionHost();
  const sdk40 = LookerExtensionSDK40.createClient(extensionSdk);
  const result = await sdk40.me();
  const name = result.ok ? result.value.display_name : "Unknown";
  document.write(`
  <style>
    body {
      font-family: -apple-system, system-ui, BlinkMacSystemFont;
      text-align:center;
      font-variant-numeric: tabular-nums;
    }
    }
    .webpage {
      padding: 100px 0;
    }
  </style>
  <div class="webpage">
    <h1>Hello, ${name}</h1>
  </div>
`);
})();
