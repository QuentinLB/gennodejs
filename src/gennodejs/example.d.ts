/**
 * /// <reference types="node" />
import { Connection } from '../core';
import { TopicManager, OperationalStateData, OperationalStateSubscriber, DockPublisher } from '../ros/topics';
import { EventEmitter } from 'events';
export declare class Brainstem extends EventEmitter {
    connection: Connection;
    topicManager: TopicManager;
    operationalState: OperationalStateData;
    operationalStateSubscriber: OperationalStateSubscriber;
    dockCmdPublisher: DockPublisher;
    dockingStarted: boolean;
    constructor(connection: Connection);
    dock(distance: number): Promise<{}>;
    _operationalStateChanged(operationalState: OperationalStateData): void;
}
 */

import { Polygon } from '??';
import { Header } from '??';

export declare class PolygonStamped {
	header: Header;
	polygon: Polygon;
	constructor(initObj={});
	static serialize(obj, buffer, bufferOffset);
	static deserialize(buffer, bufferOffset=[0]): PolygonStamped;
	static getMessageSize(object): number;
	static datatype(): string;
	static md5sum(): string;
	static messageDefinition(): string;
	static Resolve(msg): PolygonStamped;
}

// example with array??