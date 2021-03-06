﻿/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SqxFrameworkModule } from '@app/framework';

import {
    AppFormComponent,
    AppLanguagesService,
    AppMustExistGuard,
    AppsService,
    AppsState,
    AssetComponent,
    AssetDialogComponent,
    AssetPreviewUrlPipe,
    AssetsDialogState,
    AssetsListComponent,
    AssetsSelectorComponent,
    AssetsService,
    AssetsState,
    AssetUploaderComponent,
    AssetUploaderState,
    AssetUrlPipe,
    AuthInterceptor,
    AuthService,
    AutoSaveService,
    BackupsService,
    BackupsState,
    ClientsService,
    ClientsState,
    CommentComponent,
    CommentsComponent,
    CommentsService,
    ContentMustExistGuard,
    ContentsService,
    ContentsState,
    ContributorsService,
    ContributorsState,
    FileIconPipe,
    FilterComparisonComponent,
    FilterLogicalComponent,
    FilterNodeComponent,
    GeolocationEditorComponent,
    GraphQlService,
    HelpComponent,
    HelpMarkdownPipe,
    HelpService,
    HistoryComponent,
    HistoryListComponent,
    HistoryMessagePipe,
    HistoryService,
    LanguageSelectorComponent,
    LanguagesService,
    LanguagesState,
    LoadAppsGuard,
    LoadLanguagesGuard,
    MarkdownEditorComponent,
    MustBeAuthenticatedGuard,
    MustBeNotAuthenticatedGuard,
    NewsService,
    PatternsService,
    PatternsState,
    PlansService,
    PlansState,
    QueryComponent,
    ReferencesDropdownComponent,
    RichEditorComponent,
    RolesService,
    RolesState,
    RuleEventsState,
    RulesService,
    RulesState,
    SavedQueriesComponent,
    SchemaCategoryComponent,
    SchemaMustExistGuard,
    SchemaMustExistPublishedGuard,
    SchemaMustNotBeSingletonGuard,
    SchemasService,
    SchemasState,
    SearchFormComponent,
    SortingComponent,
    TableHeaderComponent,
    TranslationsService,
    UIService,
    UIState,
    UnsetAppGuard,
    UnsetContentGuard,
    UsagesService,
    UserDtoPicture,
    UserIdPicturePipe,
    UserNamePipe,
    UserNameRefPipe,
    UserPicturePipe,
    UserPictureRefPipe,
    UsersProviderService,
    UsersService,
    WorkflowsService,
    WorkflowsState
} from './declarations';
import { SchemaTagConverter } from './state/schema-tag-converter';

@NgModule({
    imports: [
        DragDropModule,
        RouterModule,
        SqxFrameworkModule
    ],
    declarations: [
        AppFormComponent,
        AssetComponent,
        AssetDialogComponent,
        AssetPreviewUrlPipe,
        AssetUrlPipe,
        AssetsListComponent,
        AssetsSelectorComponent,
        AssetUploaderComponent,
        CommentComponent,
        CommentsComponent,
        FileIconPipe,
        FilterNodeComponent,
        FilterLogicalComponent,
        FilterComparisonComponent,
        GeolocationEditorComponent,
        HelpComponent,
        HelpMarkdownPipe,
        HistoryComponent,
        HistoryListComponent,
        HistoryMessagePipe,
        LanguageSelectorComponent,
        MarkdownEditorComponent,
        QueryComponent,
        ReferencesDropdownComponent,
        SavedQueriesComponent,
        SchemaCategoryComponent,
        SortingComponent,
        UserDtoPicture,
        UserIdPicturePipe,
        UserNamePipe,
        UserNameRefPipe,
        UserPicturePipe,
        UserPictureRefPipe,
        RichEditorComponent,
        SearchFormComponent,
        TableHeaderComponent
    ],
    exports: [
        AppFormComponent,
        AssetComponent,
        AssetDialogComponent,
        AssetPreviewUrlPipe,
        AssetUrlPipe,
        AssetsListComponent,
        AssetsSelectorComponent,
        AssetUploaderComponent,
        CommentComponent,
        CommentsComponent,
        DragDropModule,
        FileIconPipe,
        GeolocationEditorComponent,
        HelpComponent,
        HelpMarkdownPipe,
        HistoryComponent,
        HistoryListComponent,
        HistoryMessagePipe,
        LanguageSelectorComponent,
        MarkdownEditorComponent,
        ReferencesDropdownComponent,
        RichEditorComponent,
        RouterModule,
        SavedQueriesComponent,
        SchemaCategoryComponent,
        SearchFormComponent,
        UserDtoPicture,
        UserIdPicturePipe,
        UserNamePipe,
        UserNameRefPipe,
        UserPicturePipe,
        UserPictureRefPipe,
        TableHeaderComponent
    ],
    providers: [
        AssetsDialogState
    ]
})
export class SqxSharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SqxSharedModule,
            providers: [
                AppLanguagesService,
                AppMustExistGuard,
                AppsService,
                AppsState,
                AssetsService,
                AssetsState,
                AssetUploaderState,
                AuthService,
                AutoSaveService,
                BackupsService,
                BackupsState,
                ClientsService,
                ClientsState,
                CommentsService,
                ContentMustExistGuard,
                ContentsService,
                ContentsState,
                ContributorsService,
                ContributorsState,
                GraphQlService,
                HelpService,
                HistoryService,
                LanguagesService,
                LanguagesState,
                LoadAppsGuard,
                LoadLanguagesGuard,
                MustBeAuthenticatedGuard,
                MustBeNotAuthenticatedGuard,
                NewsService,
                PatternsService,
                PatternsState,
                PlansService,
                PlansState,
                RolesService,
                RolesState,
                RuleEventsState,
                RulesService,
                RulesState,
                SchemaMustExistGuard,
                SchemaMustExistPublishedGuard,
                SchemaMustNotBeSingletonGuard,
                SchemasService,
                SchemasState,
                SchemaTagConverter,
                TranslationsService,
                UIService,
                UIState,
                UnsetAppGuard,
                UnsetContentGuard,
                UsagesService,
                UsersProviderService,
                UsersService,
                WorkflowsService,
                WorkflowsState,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                }
            ]
        };
    }
}