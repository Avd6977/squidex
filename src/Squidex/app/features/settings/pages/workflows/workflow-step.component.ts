/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import {
    RoleDto,
    WorkflowDto,
    WorkflowStep,
    WorkflowStepValues,
    WorkflowTransition,
    WorkflowTransitionValues,
    WorkflowTransitionView
} from '@app/shared';

@Component({
    selector: 'sqx-workflow-step',
    styleUrls: ['./workflow-step.component.scss'],
    templateUrl: './workflow-step.component.html'
})
export class WorkflowStepComponent implements OnChanges {
    public readonly onBlur: { updateOn: 'blur' } = { updateOn: 'blur' };

    @Output()
    public makeInitial = new EventEmitter();

    @Output()
    public transitionAdd = new EventEmitter<WorkflowStep>();

    @Output()
    public transitionRemove = new EventEmitter<WorkflowTransition>();

    @Output()
    public transitionUpdate = new EventEmitter<{ transition: WorkflowTransition, values: WorkflowTransitionValues }>();

    @Output()
    public update = new EventEmitter<WorkflowStepValues>();

    @Output()
    public rename = new EventEmitter<string>();

    @Output()
    public remove = new EventEmitter();

    @Input()
    public workflow: WorkflowDto;

    @Input()
    public step: WorkflowStep;

    @Input()
    public roles: ReadonlyArray<RoleDto>;

    @Input()
    public disabled: boolean;

    public openSteps: ReadonlyArray<WorkflowStep>;
    public openStep: WorkflowStep;

    public transitions: ReadonlyArray<WorkflowTransitionView>;

    public ngOnChanges(changes: SimpleChanges) {
        if (changes['workflow'] || changes['step'] || false) {
            this.openSteps = this.workflow.getOpenSteps(this.step);
            this.openStep = this.openSteps[0];

            this.transitions = this.workflow.getTransitions(this.step);
        }
    }

    public changeTransition(transition: WorkflowTransition, values: WorkflowTransitionValues) {
        this.transitionUpdate.emit({ transition, values });
    }

    public changeName(name: string) {
        this.rename.emit(name);
    }

    public changeColor(color: string) {
        this.update.emit({ color });
    }

    public changeNoUpdate(noUpdate: boolean) {
        this.update.emit({ noUpdate });
    }

    public emitMakeInitial() {
        this.makeInitial.emit();
    }

    public emitTransitionAdd(transition: WorkflowStep) {
        this.transitionAdd.emit(transition);
    }

    public emitTransitionRemove(transition: WorkflowTransition) {
        this.transitionRemove.emit(transition);
    }

    public emitRemove() {
        this.remove.emit();
    }

    public trackByTransition(index: number, transition: WorkflowTransition) {
        return transition.to;
    }
}