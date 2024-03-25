import { defineConfig } from 'vite';
import path from 'path'; 

export default defineConfig({
  
  resolve: {
    alias: {
      '@nomicfoundation/solidity-analyzer-win32-x64-msvc': path.resolve(__dirname, 'node_modules/@nomicfoundation/solidity-analyzer-win32-x64-msvc/solidity-analyzer.win32-x64-msvc.node'),
      '@nomicfoundation/edr-win32-x64-msvc': path.resolve(__dirname, 'node_modules/@nomicfoundation/edr-win32-x64-msvc/edr.win32-x64-msvc.node')
    }
  }
});
