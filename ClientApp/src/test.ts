// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [],
    declarations: [],
  });
});

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
const context = require.context('./', true, /\.spec\.ts$/);

context.keys().map(context);

TestBed.configureTestingModule({
  imports: [HttpClientTestingModule],
})
.compileComponents();

